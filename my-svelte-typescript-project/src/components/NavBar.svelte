<script>
    import { link } from 'svelte-spa-router';
</script>

<nav class = "navbar">
    <a href="/" use:link>Home</a> 
    <a href="/about" use:link> About</a>
</nav>

<style>
      .navbar {
        position: fixed;
    top: 0;
    width: 100vw;
    
    padding: 1em;
    /* border-bottom: 1px solid #dee2e6; */
    z-index: 1000;
    }

    a {
        margin-right: 1em;
        color: #333;
        text-decoration: none;
    }

    a.router-link-exact-active {
        font-weight: bold;
        text-decoration: underline;
    }
    
</style>

