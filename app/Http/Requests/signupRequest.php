<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Mockery\Generator\StringManipulation\Pass\Pass;
use Illuminate\Validation\Rules\Password;

class signupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        // return [
        //     'name' => 'required|string|max:55',
        //     'email' => 'required|string|email|unique:users',
        //     'password' => 'required|string|confirmed|min:6',
        // ];

        return [
            'name' => 'required|string|max:55',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->mixedCase()
                    ->letters()
                    ->symbols(),
            ],
        ];
    }
}
