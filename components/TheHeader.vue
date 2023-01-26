<template>
    <div class="header-section header-white" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center" >
                    <!-- Header Logo Start -->
                    <div class="col-auto d-flex ">
                        <div class="header-logo ml-lg-10 ml-md-0">
                            <n-link to="/">
                                <v-img preload loading="lazy" fit="cover" class="dark-logo" width="100" src="/logo.png" alt="Agency Logo"/>
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->
                    <v-spacer ></v-spacer>
                    <!-- Header Main Menu Start -->
                    <div class="col-auto d-flex" >
                        <div class="menu-column-area d-none d-xl-block d-lg-block position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li>
                                        <!-- <v-tab>Item One</v-tab> -->
                                        <n-link class="headers" style="text-decoration: none" to="#Planes">Planes </n-link>
                                        <div class="linea"></div>
                                    </li>
                                    <li>
                                        <n-link class="headers" style="text-decoration: none" to="#Services">Servicios</n-link>
                                        <div class="linea"></div>
                                    </li>
                                    <li>
                                        <n-link class="headers" style="text-decoration: none" to="#About">¿Quiénes Somos?</n-link>
                                        <div class="linea"></div>
                                    </li>
                                    <li>
                                        <n-link class="headers" style="text-decoration: none" to="#Contact">Contacto</n-link>
                                        <div class="linea"></div>
                                    </li>
                                    <li>
                                        <n-link class="headers" style="text-decoration: none" to="#Services">Arma tu plan</n-link>
                                        <div class="linea"></div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                
                        <div class="header-mobile-menu-toggle d-lg-none d-xl-none d-md-block  ml-sm-2 mt-5">
                            <button aria-label="Menu hamburguesa" class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
</template>

<script>
    export default {
        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>
