<li class="dropdown pc-h-item">
    <a class="pc-head-link dropdown-toggle arrow-none m-0 trig-drp-search" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
        <svg class="pc-icon">
            <use xlink:href="#custom-search-normal-1"></use>
        </svg>
    </a>
    <div wire:ignore.self class="dropdown-menu pc-h-dropdown drp-search" style="">
    <input type="text" wire:model.live="searchG" class="form-control border-0 shadow-none" placeholder="Search here...">
        <form class="px-3 py-2" style="max-height: 600px; overflow-y: auto;">
            
            @if(!empty($searchG))
                @if($searchResults['profesores']->isEmpty() && $searchResults['formaciones']->isEmpty() && $searchResults['modulos']->isEmpty() && $searchResults['grupos']->isEmpty() && $searchResults['lecciones']->isEmpty())
                    <p><br>No se encontraron resultados</p>
                @else
                    
                        @foreach($searchResults as $entity => $results)
                            @if($results->isNotEmpty())
                                
                                    <h2>{{ ucfirst($entity) }} ({{ $results->count() }})</h2>
                                    
                                        <ul>
                                            <div class="row">
                                                @foreach($results as $result)
                                                <div class="col-md-12">
                                                    <li>
                                                        @if($entity === 'profesores')
                                                            {{ $result->nombre }} {{ $result->apellido1 }} {{ $result->apellido2 }}
                                                        @elseif($entity === 'formaciones')
                                                            {{ $result->denominacion }} ({{ $result->siglas }})
                                                        @elseif($entity === 'modulos')
                                                            {{ $result->denominacion }} ({{ $result->siglas }})
                                                        @elseif($entity === 'grupos')
                                                            {{ $result->denominacion }} {{ $result->turno }} ({{ $result->curso_escolar }})
                                                        @elseif($entity === 'lecciones')
                                                            [{{ $result->grupo->denominacion }}] {{ $result->profesor->nombre }} {{ $result->profesor->apellido1 }} {{ $result->profesor->apellido2 }} ({{ $result->modulo->siglas }} -> {{ $result->horas }} horas)
                                                        @endif
                                                    </li>
                                                </div>
                                                @endforeach
                                            </div>
                                        </ul>
                               
                            @endif
                        @endforeach
                    
                @endif
            @endif
        </form>
    </div>
</li>
