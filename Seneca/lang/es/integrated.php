<?php
return [
    'teachers_modal' => [
        'teachers' => 'Profesores',
        'teacher' => 'Profesor',
        'seneca_user' => 'Usuario de Seneca:',
        'seneca_user_error_message' => 'El usuario de Seneca debe estar compuesto por 7 letras y 3 números.',
        'seneca_user_error_invalid' => 'El formato del usuario de Seneca no es válido.',

        'name' => 'Nombre:',
        'name_error_message' => 'El nombre debe tener entre 3 y 30 caracteres de longitud.',

        'last_name' => 'Apellidos:',
        'last_name_error_message' => 'Cada apellido debe tener entre 3 y 50 caracteres de longitud.',
        'first_last_name_error_invalid' => 'El formato del primer apellido no es válido.',
        'second_last_name_error_invalid' => 'El formato del segundo apellido no es válido.',

        'speciality' => 'Especialidad:',
        'select_speciality_message' => 'Selecciona una especialidad.',
        'select_speciality_option' => 'Selecciona una especialidad',
        'high_school_option' => 'Educación secundaria',
        'vocational_training_option' => 'Formación profesional',

        'close_button' => 'Cerrar',
        'save_button' => 'Guardar',

        'show_label' => 'Mostrar',
        'entries_label' => 'entradas',

        'search_label' => 'Buscar:',
        'create_teacher_button' => 'Crear profesor',

        'actions_header' => 'Acciones',
        'no_results_message' => 'No se encontraron resultados.',
        'no_teachers_message' => 'No se encontraron profesores.',
    ],
    'teachers_page' => [
        'column_seneca_user' => 'Usuario de Seneca',
        'column_name' => 'Nombre',
        'column_first_name' => 'Primer Apellido',
        'column_last_name' => 'Segundo Apellido',
        'column_speciality' => 'Especialidad',
    ],

    /* formaciones */
    'formations_page' => [
        'formations' => 'Formaciones',
        'column_acronym' => 'Acrónimo',
        'column_denomination' => 'Denominación',
        'column_actions' => 'Acciones',
        'no_results_message' => 'No se encontraron resultados.',
        'no_educations_message' => 'No se encontraron educaciones.',
    ],
    'formations_modal' => [
        'title' => 'Formación',
        'close_button' => 'Cerrar',
        'acronym_label' => 'Acrónimo:',
        'acronym_error_message' => 'El acrónimo debe tener al menos 2 caracteres de longitud.',
        'denomination_label' => 'Denominación:',
        'denomination_error_message' => 'La denominación debe tener entre 3 y 255 caracteres de longitud.',
        'show_label' => 'Mostrar',
        'entries_label' => 'entradas',
        'search_label' => 'Buscar:',
        'create_formation_button' => 'Crear Formación',
        'column_acronym' => 'Acrónimo',
        'column_denomination' => 'Denominación',
    ],

    /* lecciones */
    'lessons_page' => [
        'lessons' => 'Lecciones',
        'lessons_show' => 'Mostrar',
        'lessons_entries' => 'entradas',
        'lessons_search' => 'Buscar:',
        'create_lesson' => 'Crear lección',
        'no_results_found' => 'No se encontraron resultados.',
        'column_name_hours' => 'Horas',
        'column_name_teachers' => 'Profesores',
        'column_name_module' => 'Módulo',
        'column_name_group' => 'Grupo',
        'column_name_actions' => 'Acciones',
    ],

    /* lessons modal */
    'lessons_modal' => [
        'modal_title' => 'Lección',
        'close_button' => 'Cerrar',
        'hours_label' => 'Horas:',
        'hours_input_placeholder' => 'Ingrese las horas',
        'hours_input_invalid_message' => 'Las horas no son válidas.',
        'teacher_label' => 'Profesor:',
        'select_any_teacher' => 'Seleccionar cualquier profesor',
        'no_teacher_registered' => 'Todavía no hay profesores registrados...',
        'error_profesor_id_message' => 'Seleccione una especialidad.',
        'error_teacher_message' => 'El profesor no es válido.',
        'module_label' => 'Módulo:',
        'select_any_module' => 'Seleccionar cualquier módulo',
        'no_modules_registered' => 'Todavía no hay módulos registrados...',
        'error_modulo_id_message' => 'Seleccione un módulo.',
        'error_module_message' => 'El módulo no es válido.',
        'group_label' => 'Grupo:',
        'select_any_group' => 'Seleccionar cualquier grupo',
        'no_groups_registered' => 'Todavía no hay grupos registrados...',
        'error_grupo_id_message' => 'Seleccione un grupo.',
        'error_group_message' => 'El grupo no es válido.',
        'close_btn' => 'Cerrar',
    ],

    /* Grupos */
    'groups_page' => [
        'groups' => 'Grupos',
        'show' => 'Mostrar',
        'entries' => 'entradas',
        'search' => 'Buscar:',
        'create_group' => 'Crear grupo',
        'actions' => 'Acciones',
        'no_results_found' => 'No se encontraron resultados.',
        'no_groups_found' => 'No se encontraron grupos.',
        'denomination' => 'Denominación',
        'turn' => 'Turno',
        'course' => 'Curso',
        'school_course' => 'Curso Escolar',
        'formation_denomination' => 'Denominación de formación',
    ],
    'groups_modal' => [
        'group' => 'Grupo',
        'label_denomination' => 'Denominación:',
        'invalid_denomination' => 'La denominación no es válida.',
        'label_turn' => 'Turno:',
        'select_any_turn' => 'Seleccionar cualquier turno',
        'morning' => 'Mañana',
        'afternoon' => 'Tarde',
        'invalid_turn' => 'El turno no es válido.',
        'label_school_year' => 'Año escolar:',
        'invalid_school_year' => 'El año escolar no es válido.',
        'label_course' => 'Curso:',
        'select_any_course' => 'Seleccionar cualquier curso',
        'invalid_course' => 'El curso no es válido.',
        'label_formation' => 'Formación:',
        'select_any_formation' => 'Seleccionar cualquier formación',
        'no_formation_register' => 'Aún no hay registro de formación',
        'invalid_formation' => 'La formación no es válida',
        'close_btn' => 'Cerrar',
    ],

    /* Módulos */
    'modules_page' => [
        'modules' => 'Módulos',
        'show' => 'Mostrar',
        'entries' => 'entradas',
        'label_search' => 'Buscar:',
        'create_module' => 'Crear módulo',
        'actions' => 'Acciones',
        'no_results_found' => 'No se encontraron resultados.',
        'no_modules_found' => 'No se encontraron módulos.',
        'denomination' => 'Denominación',
        'speciality' => 'Especialidad',
        'acronym' => 'Acrónimo',
        'course' => 'Curso',
        'hours' => 'Horas',
        'formation' => 'Formación',
    ],
    'modules_modal' => [
        'module' => 'Módulo',
        'label_denomination' => 'Denominación:',
        'invalid_denomination' => 'La denominación no tiene un formato válido.',
        'label_speciality' => 'Especialidad:',
        'select_speciality' => 'Seleccionar una especialidad',
        'high_school' => 'Escuela secundaria',
        'vocational_training' => 'Formación profesional',
        'error_speciality' => 'El formato de la especialidad no es válido.',
        'label_acronym' => 'Acrónimo:',
        'invalid_acronym' => 'Los acrónimos no tienen un formato válido.',
        'label_course' => 'Curso:',
        'select_course' => 'Seleccionar un curso',
        'error_course' => 'El curso no es válido.',
        'label_hours' => 'Horas:',
        'invalid_hours' => 'Las horas ingresadas no son válidas.',
        'select_formation' => 'Seleccionar una formación',
        'no_formation_registered' => 'Aún no hay formación registrada',
        'error_formation' => 'La formación no es válida.',
        'close_btn' => 'Cerrar',
    ],

    'roles_page' => [
        'roles' => 'Roles',
        'show' => 'Mostrar',
        'entries' => 'entradas',
        'label_search' => 'Buscar:',
        'actions' => 'Acciones',
        'username' => 'Nombre de usuario',
        'rol' => 'Rol',
        'no_results_found' => 'No se encontraron resultados.',
        'no_roles_found' => 'No se encontraron roles.',
    ],
    'roles_modal' => [
        'role' => 'Rol',
        'label_username' => 'Nombre de usuario:',
        'label_speciality' => 'Especialidad:',
        'select_any_role' => 'Seleccionar cualquier rol',
        'no_roles_registered' => 'Aún no hay roles registrados...',
        'error_wrong_role' => 'El rol elegido es incorrecto.',
        'close_btn' => 'Cerrar',
    ],


    'index_page' => [
        'home' => 'Inicio',
        'label_show' => 'Mostrar',
        'label_entries' => 'entradas',
        'label_search' => 'Buscar:',
        'no_results_found' => 'No se encontraron resultados.',
        'teachers' => 'Profesores',
        'acronym_formation' => 'Acrónimo de formación',
        'module' => 'Módulo',
        'hours' => 'Horas',
        'group' => 'Grupo',
        'year' => 'Año',
    ],

    /* Barra de navegación */
    'navi_bar' => [
        'navigation' => 'Navegación',
        'dashboard' => 'Tablero',
        'tables' => 'Tablas',
        'teacher' => 'Profesor',
        'formation' => 'Formación',
        'modules' => 'Módulos',
        'groups' => 'Grupos',
        'lessons' => 'Lecciones',
        'roles' => 'Roles',
        'login' => 'Iniciar sesión',
        'register' => 'Registrarse',
    ],
];
