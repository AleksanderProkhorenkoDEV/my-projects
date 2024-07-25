/**
 * Esta función es la encargada de hacer la petición a la API de wordpres para obtener los post.
 * por defecto pide 12 post, en el caso de que el usuario pulse el botón de cargar más post, entonces
 * el parametro viene con la cantidad máxima de post a pedir, que suele ser el doble del anterior.
 * @param {*} totalRender int
 * @returns posts[]
 */
async function getAllPost(totalRender) {

    const perPage = 12;

    try {
        const response = await fetch(`http://wordpress-sidn.dvl.to/wp-json/wp/v2/posts?per_page=${totalRender != null ? totalRender : perPage}`);
        const posts = await response.json()
        console.log('Todos los post', posts)
        return posts
    } catch (error) {
        return []
    }
}

/**
 * Esta función se encarga de obtener los thumbnails de cada post, para ello hacemos una petición con el feature_media de cada
 * post.
 * @param {*} id int
 * @returns string
 */
async function getMediaPost(id) {
    try {
        const response = await fetch(`http://wordpress-sidn.dvl.to/wp-json/wp/v2/media/${id}`)
        const media = await response.json()
        return media.guid.rendered
    } catch (err) {
        console.log('hubo un error')
    }
}
/**
 * Esta función es la que se encarga de hacer la petición a los post y a los media de cada post en un bucle for,
 * una vez obtenemos todos los datos obtiene el contenedor grid y inserta los items uno a uno en orden.
 * @param {*} totalRender 
 */
async function renderPosts(totalRender) {
    const posts = await getAllPost(totalRender);
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';

    for (const post of posts) {
        const imageUrl = post.featured_media ? await getMediaPost(post.featured_media) : '';

        const postElement = document.createElement('div');
        postElement.classList.add('grid-item');

        postElement.innerHTML = `
            <div class='post-header'>
                <div>
                    <img src="${imageUrl}" alt="${post.title.rendered}" class='media-post'>
                </div>
                <p>${post.title.rendered}</p>
            </div>
            <div class='post-content'>
                <p>${post.excerpt.rendered}</p>
            </div>
            <div class='post-link'>
                <a href="${post.link}" target="_blank">Details <img src="/wp-content/themes/sidn/assets/icons/Arrow.svg" alt='arrow' class='icon-post'/></a>
            </div>
        `;

        container.appendChild(postElement);
    }
}

/**
 * Esta función se encarga de añadirle el evento click al button cuando el HTML este complemtamente cargado,
 * en el caso de que no le haya dado ninguna vez redenrizara 12 post por defecto, en el caso de que pulse se sumaran 12 post más
 * y se renderizara hasta 24 post simultaneamente.
 */
function renderMorePost() {
    const button = document.getElementById('load-more');
    let perPage = 12;
    document.addEventListener('DOMContentLoaded', () => {
        button.addEventListener('click', function () {
            const totalPost = perPage + 12;
            perPage = totalPost;
            renderPosts(totalPost)
        })
    })
}

renderMorePost()
renderPosts()