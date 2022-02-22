<template>
 <div id="app" class="app">
			<h1>{{ restaurantName }}</h1>
			<p class="description">
				Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
				notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
				matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
				est difficile de s'arrêter.
			</p>

			<section class="menu">
				<h2>Menu</h2>

				<MenuItem 
				@add-items-to-cart="ajouterPanier"

        v-for="item in simpleMenu"
        
        :image="item.image"
        :quantity="item.quantity"
        :name="item.name"        
        :inStock="item.inStock"
        :price="item.price"
        :key="item.name"


        />
    

			</section>

			<aside class="shopping-cart">
				<h2>Panier d'achat : {{ shoppingCart }} articles</h2>
			</aside>

		
			<p>Horaires :</p>
			<ul>
				<li>L-V: 06:00 à 16:00</li>
				<li>Samedi: 07:00 à 14:00</li>
				<li>Dimanche: 07:00 à 12:00</li>
			</ul>
			<footer class="footer">
				<p>{{ copyright }}</p>
			</footer>
		</div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'

export default {
  name: 'HomeV',
  components: {
    MenuItem,
  },
  data(){
        return {
				
					restaurantName: "La belle vue",
					shoppingCart: 0,
                    qty: 1,
					simpleMenu: [
						{
							name: "Croissant",
							image: {
								source: "/images/croissant.jpg",
								alt: "Un croissant"
							},
							inStock: true,
							quantity: 1,
                            price: 2.99
						},
						{
							name: "Baguette de pain",
							image: {
								source: "/images/french-baguette.jpeg",
								alt: "Quatre baguettes de pain"
							},
							inStock: true,
							quantity: 1,
                            price: 3.99
						},
						{
							name: "Éclair",
							image: {
								source: "/images/eclair.jpg",
								alt: "Éclair au chocolat"
							},
							inStock: false,
							quantity: 1,
                            price: 4.99
						}
					],
        }
  },

				computed: {
					copyright() {
						const currentYear = new Date().getFullYear()

						return `Copyright ${this.restaurantName} ${currentYear}`
					}
				},
				methods: {
					ajouterPanier(payload){

						this.shoppingCart += payload.retour

					}
					
				}
                
      }
 
			


</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>
