<script lang="ts">
    import Router  from 'svelte-spa-router';
        import Route  from 'svelte-spa-router';
  
   
    import TodoList from './components/TodoList.svelte';
    import About from './components/About.svelte';
    import Navbar from './components/Navbar.svelte';

    let routes = {
        '/': TodoList,
        '/about': About
    }
</script>

    
   <Navbar />
<Router {routes}>
    <Route path="/" let:params>
        <TodoList />
    </Route>
    <Route path="about" let:params>
        <About />
    </Route>
</Router> 



<style>
 #app {
        /* display: flex;
        flex-direction: column;
        align-items: stretch;
        height: 100vh;
        text-align: center; */
        
    }

</style>


