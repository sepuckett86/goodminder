<?php

namespace App\Api\V1\Controllers;

use Config;
use App\User;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Api\V1\Requests\SignUpRequest;
use Symfony\Component\HttpKernel\Exception\HttpException;
use DB;

class SignUpController extends Controller
{
    public function signUp(SignUpRequest $request, JWTAuth $JWTAuth)
    {
        $user = new User($request->all());
        if(!$user->save()) {
            throw new HttpException(500);
        }

        // Add user 1's promptCollections to new user's storedPromptCollection.
        $this->populateNewUserStoredPromptCollections($user->id);

        if(!Config::get('boilerplate.sign_up.release_token')) {
            return response()->json([
                'status' => 'ok'
            ], 201);
        }

        $token = $JWTAuth->fromUser($user);
        return response()->json([
            'status' => 'ok',
            'token' => $token
        ], 201);
    }

    /**
     * Populate the stored_prompts_collections table with user 1's prompt collections
     * for newly signed up users.
     */
    public function populateNewUserStoredPromptCollections($userID)
    {
        for ($i=1; $i<=4; $i++) {
            DB::table('stored_prompt_collections')->insert([
                'user_id' => $userID,
                'prompt_collection_id' => $i,
                'displayFlag' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }
    }
}
