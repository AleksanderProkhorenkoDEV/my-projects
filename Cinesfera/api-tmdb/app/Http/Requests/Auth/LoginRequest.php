<?php

namespace App\Http\Requests\Auth;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;



class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; //Change this value allows the CustomRequest.
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email'    => 'required | email',
            'password' => [
                'required',
                $this->isPrecognitive() ? Password::min(8) : Password::min(8)->uncompromised(),
            ]
        ];
    }


    /**
     * Function with which we modify the default Laravel error message to a custom message
     */
    public function message(){
        return [
            'email.unique'      => 'Error: The email has already been taken.',
            'email.email'       => 'Error: Please enter a valid email address.',
            'password.required' => 'Error: You need to enter a password'
        ];
    }

   /**
     * Function with which we handle the one that shows the error messages after the validation fails, this overwrites
     * to the original method that redirects to the previous route.
     */
    protected function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
