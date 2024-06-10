<?php

namespace App\Http\Requests\Media;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class MediaRequest extends FormRequest
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
            'user_id'       => 'required | numeric | min:0',
            'media_type'    => 'required | in:movies,series',
            'media_id'      => 'required | numeric | min:0',
            'backdrop_path' => 'required | string'
        ];
    }

    /**
     * Function with which we modify the default Laravel error message to a custom message
     */
    public function message(){
        return [
            'user_id.required'      => 'El identificador del usuario es obligatorio.',
            'user_id.numeric'       => 'El identificador del usuario tiene que ser un número.',
            'user_id.min'           => 'El identificador del usuario no puede ser negativo.',
            'media_type.required'   => 'El tipo de media tiene que ser obligatorio.',
            'media_type.in'         => 'El tipo de media solo puede ser pelicula o serie.',
            'media_id.required'     => 'El identificador del usuario es obligatorio.',
            'media_id.numeric'      => 'El identificador del usuario tiene que ser un número.',
            'media_id.min'          => 'El identificador del usuario no puede ser negativo.'
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
