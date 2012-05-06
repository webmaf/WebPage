<div id="slider-home" class="slider">
    <div class="slider-screen">
        <ul>
            <li>
                <div>
                    <img src="images/slide1.jpg" alt="" />
                </div>
            </li>
            <li>
                <div>
                    <img src="images/slide2.jpg" alt="" />
                </div>
            </li>
            <li>
                <div>
                    hallöchen
                </div>
            </li>
            <li>
                <div>
                    <img src="images/slide3.jpg" alt="" />
                </div>
            </li>
            <li>
                <div>
                    <img src="images/slide4.jpg" alt="" />
                </div>
            </li>
        </ul>
    </div>
    <div class="slider-nav">
        <button data-dir="prev" class="prev">prev</button>
        <button data-dir="next" class="next">next</button>
    </div>
</div>

<h1>new design</h1>
<!--<a href="http://eu.battle.net/d3/de/class/witch-doctor/active/firebats" target="_blank">Firebats</a>-->


<?php

?>
<div id="remanum">
    <div class="tooltip"></div>
    <nav>
        <ul class="tabs row">
            <li>Section:</li>
            <li><button data-tab="prolog">nothing</button></li>
            <li><button data-tab="tradelist">tradelist</button></li>
            <li><button data-tab="productlist">productlist</button></li>
            <li><button data-tab="buildinglist">buildinglist</button></li>
        </ul>
    </nav>

    <section class="prolog">
        <article>
            <div><strong>Notizen:</strong></div>
            <code>$('.remusChat').attr('style', 'left:0; top:0').find('.body').css({height: '730px'}).find('.timeline').css({height: '705px'})</code><br />
            <code>$('.remusChat').attr('style', 'left:0; top:0').find('.body').css({height: '910px'}).find('.timeline').css({height: '885px'})</code>
        </article>
    </section>

    <section class="tradelist">
        <header>
            <section></section>
            <div>
                <span class="icon delete"></span>
                <input class="items itemname" type="text" name="item" value="" placeholder="Schafe" />
                <span class="icon item"></span>
                <input class="buy minimum" type="text" name="buymin" value="" placeholder="40" />
                <input class="buy maximum" type="text" name="buymax" value="" placeholder="50" />
                <span class="icon denare"></span>
                <span class="col-2 diff"></span>
                <input class="sell denaren" type="text" name="selltop" value="" placeholder="100" />
                <input class="sell minutes" type="text" name="sellmin" value="" placeholder="00m00" />
                <span class="col-3 profit"></span>
                <span class="col-3 amount"></span>
                <span class="col-3 benefit"></span>
                <span class="icon item right"></span>
                <br />
            </div>
        </header>
        <nav>
            <ul class="row">
                <li class="icon">...</li>
                <li class="col-6 sort" data-sort="itemname">itemname</li>
                <li class="icon">...</li>
                <li class="col-3 sort" data-sort="minimum">minimum</li>
                <li class="col-3 sort" data-sort="maximum">maximum</li>
                <li class="icon">...</li>
                <li class="col-2">marge</li>
                <li class="col-3 sort" data-sort="denaren">denare</li>
                <li class="col-3 sort" data-sort="minutes">minutes</li>
                <li class="col-3 sort" data-sort="profit">profit</li>
                <li class="col-3 sort" data-sort="amount">amount</li>
                <li class="col-3 sort" data-sort="benefit">benefit</li>
            </ul>
        </nav>
        <article></article>
        <p>
            <button name="adds" value="adds" class="active"> add row</button>
            <button name="save" value="save" class="active"> save data</button>
        </p>
    </section>

    <section class="productlist">
        <header>
            <section></section>
            <div class="row">
                <span class="col-10 product"></span>
            </div>
        </header>
        <article></article>
    </section>

    <section class="buildinglist">
        <header>
            <section></section>
            <div class="row">
                <span class="col-10 product">Apotheke</span>
                <div class="row">
                    <span class="icon item"></span>
                </div>
            </div>
        </header>
        <article>

            <div class="row">
                <span class="col-10 product">Apotheke</span>
                <div class="row">
                    <span class="icon item"></span>
                </div>
            </div>

        </article>
    </section>
</div>