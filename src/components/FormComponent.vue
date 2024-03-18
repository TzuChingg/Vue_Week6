<template>
    <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="postOrder">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field id="email" name="email" type="email" class="form-control" v-model="form.email"
                :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field id="name" name="姓名" type="text" class="form-control" v-model="form.name"
                :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field id="tel" name="電話" type="text" class="form-control" v-model="form.tel"
                :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話"
                rules="required|min:8|numeric|max:10"></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field id="address" name="地址" type="text" class="form-control" v-model="form.address"
                :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <v-field as="textarea" id="message" name="message" class="form-control" cols="30" rows="10"
                v-model="form.message"></v-field>
        </div>
        <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
    </v-form>
</template>

<script>

export default {
    props: ['cart'],
    data() {
        return {
            apiUrl: import.meta.env.VITE_APIURL,
            apiPath: import.meta.env.VITE_APIPATH,
            form: {
                name: "",
                email: "",
                tel: "",
                address: "",
                message: "",
            },
        }
    },
    methods: {
        postOrder() {
            if (this.cart.carts.length) {
                this.axios.post(`${this.apiUrl}${this.apiPath}/order`, {
                    data: {
                        user: {
                            name: this.form.name,
                            email: this.form.email,
                            tel: this.form.tel,
                            address: this.form.address,
                        },
                        message: this.form.message,
                    },
                })
                    .then((res) => {
                        alert(res.data.message);
                        this.$refs.form.resetForm();
                        this.$emit('updatedCart');
                    })
                    .catch(() => {
                        console.error("送出訂單失敗");
                    });
            } else {
                alert("購物車是空的，訂單無法成立");
            }
        }
    },
}
</script>

<style></style>