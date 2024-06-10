<?php

namespace App\Http\Requests\Auth;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'display_name'  =>'nullable | string | min:4 | max:30',
            'name'          =>'required | string | min:4 | max:30',
            'email'         =>'required | email  | unique:users',
            'password' => [
                'required',
                'confirmed',
                $this->isPrecognitive() ? Password::min(8) : Password::min(8)->uncompromised(),
            ]
        ];
    }

    /**
     * This function overrides the form attributes, for example, 
     * if the name of a field is display_name, you can change it to another name.
     */
    public function attributes(){
        return [    
            'display_name'  => 'User Alias',
            'name'          =>'Name Acount'
        ];
    }

    /**
     * Function with which we modify the default Laravel error message to a custom message
     */
    public function message(){
        return [
            'display_name.string'   => 'Error: You cant enter anything other than text.',
            'display_name.min'      => 'Error: The text menssage need minimum 4 characters.',
            'display_name.max'      => 'Error: The text message cannot exceed 30 characters.',
            'name.required'         => 'Error: The name field is required.',
            'name.string'           => 'Error: You can only enter text for the name.',
            'name.min'              => 'Error: The name must be at least 4 characters.',
            'name.max'              => 'Error: The name cannot exceed 30 characters.',
            'email.unique'          => 'Error: The email has already been taken.',
            'email.email'           => 'Error: Please enter a valid email address.',
            'password.required'     => 'Error: Please enter a password.',
            'password.confirmed'    => 'Error: You have to enter the same password in both fields.',
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
