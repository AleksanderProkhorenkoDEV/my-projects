<?php
get_header();
?>
<main>
    <section class="hero-section">
        <header>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png' ?>" alt="Poison logo" class="logo-style">
        </header>
        <article class="article-hero">
            <div class="title-box">
                <h1 class="main-title">Buy posion.</h1>
                <h2 class="second-title">Trust us.</h2>
            </div>
            <div class="cta-box">
                <p class="hero-text">
                    Your children are safe, why would a company lie to you? We are your friends pal.
                    Buy poison today and we grant you total transparency and full refunds* if you are not satisfied with our service.
                    We care about you ❤️
                </p>
                <button class="hero-cta">drink now!</button>
            </div>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/drink-posion.png' ?>" alt="poison drink bottle" class="posion-bottle">

        </article>
        <div class="footer-hero">
            <img src="<?php echo get_template_directory_uri() . '/assets/icons/scroll-down.svg' ?>" alt="scroll icon" class="scroll-icon">
            <p class="footer-hero-text">
                *We keep the right to deny any refunds on our own terms. Total responsability is up to the final user buying poison.
            </p>
        </div>
    </section>
    <section class="second-section">
        <article class="container-title-section">
            <div class="title-section">
                <h1 class="index-title">03<span class="separator">-</span>05</h1>
            </div>
            <div class="title-box n-section">
                <h1 class="main-title bg-white">Cruelty <span>free.</span></h1>
                <h2 class="second-section-title">Development.</h2>
            </div>
        </article>
        <h6 class="section-introduction">Except for the human subjects...</h6>
        <article class="section-content">
            <div class="cube">
                <div class="cube-text">
                    <h3>Look, a cute puppy</h3>
                    <p>
                        Here on POISON we know that cute small animals go viral and get the youth’s attention.
                        Take a good look at the dog here and think carefully if you emphatize with this company.
                        We are so cool and quirky hehe uwu. Go right now to that form and buy the damn poison already.
                        We are running out of ideas to trick you people into buying our product.
                    </p>
                </div>
                <div class="cube-img">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/dolphin.jpeg' ?>" alt="Dolphin image">
                </div>
            </div>
        </article>
    </section>
    <section class="mansory">
        <div class="mansory-item1">
            <article class="title-mansory">
                <div class="number-mansory">
                    <h1 class="index-mansory">02<span class="separator">-</span>05</h1>
                </div>
                <div class="title-box n-mansory">
                    <h1 class="main-title-mansory">Our.</h1>
                    <h2 class="subtitle-mansory">Flavours.</h2>
                </div>

            </article>
        </div>
        <div class="mansory-item2">
            <div class="grid-container"></div>
        </div>
        <button id="load-more" class="load-more">Load More</button>
    </section>
</main>
<?php
get_footer();
?>