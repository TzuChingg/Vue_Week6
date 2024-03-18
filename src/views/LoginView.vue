<script>
// const apiUrl = import.meta.VITE_APIURL;
export default {
    data() {
        return {


        }
    },
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row justify-content-center align-content-center">
                <div class="col-md-6 text-center position-absolute top-50 start-50 translate-middle">
                    <h2 class="mb-5">請先登入</h2>
                    <form class="col-md-7 mx-auto mb-5">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                                v-model="username" required autofocus />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                                autocomplete="on" v-model="password" required />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button class="btn btn-primary btn-lg w-100" type="button" @click="login">登入</button>
                    </form>
                    <h5 class="text-secondary">© 2023~∞ - 六角學院</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
./LoginView.vue