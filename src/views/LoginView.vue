<template>
    <div class="container">
        <h1>Sign in to Track Stats</h1>
        <ul>
            <li class="text-input">
                <label for="" class="form-label">Email</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="userEmail"
                />
            </li>

            <li class="text-input">
                <label for="" class="form-label">Username</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="username"
                />
            </li>

            <li class="text-input">
                <label for="" class="form-label">Height (optional)</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="userHeight"
                />
            </li>
            
            <li class="text-input">
                <label for="" class="form-label">Weight (optional)</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="userWeight"
                />
            </li>

            <button 
                class="login-btn" 
                :disabled="isFormInvalid"
                @click.prevent="submitInfo">Login</button>
        </ul>
    </div>

</template>

<script>
    import {createUser } from '@/models/models';
    export default{
        computed: {
            isFormInvalid() {
                return !this.userEmail || !this.username
            }
        },

        data() {
            return {
                userEmail: "",
                username: "",
                userWeight: "",
                userHeight: "",
            }
        },
        
        methods: {
            submitInfo() {
                if (!this.userEmail || !this.username){
                    alert("Please fill out the form.");
                    return;
                }

                if (validateInfo() != ""){
                    alert("Please fill the form correctly. Issue: ", validateInfo());
                    return;
                }

                User = createUser(this.userEmail, this.username, this.userWeight, this.userHeight);

                sendToHome(User);

                this.userEmail = "";
                this.username = "";
                this.userWeight = "";
                this.userHeight ="";
            },

            
            validateInfo() {
                let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(this.userEmail)){
                    return "Ivalid Email";
                }

                if (this.username.length < 6){
                    return "Invalid username. Usernames must be between 6 and 12 characters.";
                }

                if(this.userWeight > 800 || this.userHeight < 0){
                    return "Invalid Weight.";
                }

                if (this.userHeight > 84 || this.userHeight < 0){
                    return "Invalid Height."
                }

                return "";
            },
            
            sendToHome(User){
                this.$router.push({name: '/', params: {User: User}});
            }
        }
    }
</script>

<style scope>
.container{

}
</style>