<template>
        <div class="Logout" @click="handleLogout">

        </div>
</template>

<script>
import axios from 'axios';
    export default {
        async handleLogout() {
            const url =`REST/api/validtoken`;
            const headers = {"Content-Type" : "application/json", "token" : this.token};
            console.log(headers);
            const response = await axios.delete(url, {headers : headers, token : this.token});
            console.log(response);
            if(response.data.result === 1) {
                alert("로그아웃 완료");
            }
            else if(response.data.result === 1) {
                alert("실패");
            }
            this.$router.push({ path : '/'});
        }
    }
</script>

<style scoped>

</style>