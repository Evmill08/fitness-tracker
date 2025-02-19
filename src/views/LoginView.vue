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
                    placeholder="Email"
                />
            </li>

            <li class="text-input">
                <label for="" class="form-label">Username</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="username"
                    placeholder="Username"
                />
            </li>

            <li class="text-input">
                <label for="" class="form-label">Height (optional)</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="userHeight"
                    placeholder="Height (Optional)"
                />
            </li>
            
            <li class="text-input">
                <label for="" class="form-label">Weight (optional)</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="userWeight"
                    placeholder="Weight (Optional)"
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
    import { userService } from '@/services/userServices';
    import { userID } from '@/services/firebase_config';
    export default{
        computed: {
            isFormInvalid() {
                return !this.userEmail || !this.username
            }
        },
        async created() {
            this.user = await userService.getUser()
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
            
            sendToHome(){
                this.$router.push('/');
            },

            async submitInfo() {
                if (!this.userEmail || !this.username){
                    alert("Please fill out the form.");
                    return;
                }

                const validationMessage = this.validateInfo();
                if (validationMessage) {
                    alert(`Please fill the form correctly. Issue: ${validationMessage}`);
                    return;
                }

                const userData = {
                    userID,
                    username: this.username,
                    email: this.userEmail,
                    weight: this.userWeight || 0,
                    height: this.userHeight || 0,
                    
                }

                await userService.updateUser(userData)
                this.sendToHome()
            },
        }
    }
</script>

<style scope>
.container {
    margin: 2rem auto;
    margin-top: 10%;
    width: 80%;
    height: 80%;
    max-width: 600px;
    background-color: rgba(18, 41, 43, 0.95);
    border-radius: 30px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.text-input {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    color: #64ffda;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    margin-left: 1%;
}

.form-control {
    width: 90%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 1.1rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.form-control:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.login-btn {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    background-color: #64ffda;
    color: rgba(18, 41, 43, 0.95);
    border: none;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(100, 255, 218, 0.2);
}

.login-btn:disabled {
    background-color: rgba(100, 255, 218, 0.5);
    cursor: not-allowed;
}

/* Optional: Add placeholder styling */
.form-control::placeholder {
    color: rgba(255, 255, 255, 0.5);
}
</style>