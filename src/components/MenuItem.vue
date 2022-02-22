<script>
export default {

  name: 'MenuItem',
 props: //   ["addToShoppingCart",'image','name','quantity','inStock','price'],
        {
            image:{
                type: Object,
            },
            name:{
                type: String,
            },
            quantity:{
                type: Number,
                default: 1,
            },
            inStock:{
                type: Boolean,
            },
            price:{
                type: Number,
            }
            
        },
  data(){
      return {
          onSale : false
      }
  },
  computed: {
      generatedPrice(){
          if(this.onSale){
              return (this.price * 0.9).toFixed(2)
              
          }else{
              return this.price

          }
      }
    
  },
  beforeMount(){
      const today = new Date().getDate()
      if(today % 2 === 0){
          this.onSale = true
      }    
  
  },
  methods:{
      updateShoppingCart(){

          this.$emit("add-items-to-cart",{retour: this.qty})

      }
  }
 
}


  
</script>
<template>
    <div class="menu-item">
        <img class="menu-item-image" :src="image.source" :alt="image.alt">
        <div>
            <p v-if="inStock"> Produit en stock</p>
            <p v-else>En rupture de stock </p>
            <p> {{ price }}€</p>
            <div>
                <label for="Quantity">Quantité : {{ quantity }}</label>
                <input v-model.number="qty" type="number" name="Quantity">
                <button @click="updateShoppingCart">Ajouter au panier</button>
                
            </div>
        </div>
    </div>
</template>  
<style scoped>

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
</style>