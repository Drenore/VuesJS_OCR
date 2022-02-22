<template>

<h1>Bienvenue sur le site de {{ restaurantName }}</h1>
<br>
<section>
    <div>
        <p>Vous pouvez nous retrouvez à l'adresse suivante : {{ address }}</p>
        <p>Vous pouvez nous contactez ou réserver au numéro : {{ phone }}</p>
        <p>Ou encore nous contacter directement par mail à l'adresse : {{ email }}</p>

        </div>
</section>
    

</template>
<script>

export default {
    name: "ContactV",
    data() {
        return {
        restaurantName: "La belle vue",
        address: "18 avenue du Beurre, Paris, France",
		email: "hello@cafewithavue.bakery",
		phone: "01 88 88 88 88"
        }
    }
      
    
}
</script>

