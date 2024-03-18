<template>
    <div>
        <div class="container">
            <div class="mt-4">
                <!-- 產品Modal -->
                <product-modal ref="productModal" :product="product" @addCart="addToCart"></product-modal>
                <!-- 產品Modal -->
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>圖片</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                            <td style="width: 200px">
                                <div style="height: 100px; background-size: cover; background-position: center"
                                    :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
                            </td>
                            <td>
                                {{ product.title }}
                            </td>
                            <td>
                                <!-- <div class="h5" >{{ product.origin_price }} 元</div> -->
                                <del class="h6">原價 {{ product.origin_price }} 元</del>
                                <div class="h5">現在只要 {{ product.price }} 元</div>
                            </td>
                            <td>
                                <div class="btn-group btn-group-sm">
                                    <button type="button" class="btn btn-outline-secondary"
                                        @click="getProductDetail(product)">
                                        <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
                                        查看更多
                                    </button>
                                    <button type="button" class="btn btn-outline-danger" @click="addToCart(product)">
                                        <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
                                        加到購物車
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>

import ProductModal from '@/components/ProductModalComponent.vue';
export default {
    data() {
        return {
            apiUrl: import.meta.env.VITE_APIURL,
            apiPath: import.meta.env.VITE_APIPATH,
            products: [],
            product: [],
            page: 1,
            loading: false
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        getProducts() {
            this.axios.get(`${this.apiUrl}${this.apiPath}/products`)
                .then((res) => {
                    this.products = res.data.products
                }).catch((err) => {
                    console.error(err.response);
                });
        },
        getProductDetail(product) {
            this.loading = true
            this.product = { ...product }
            setTimeout(() => {
                this.$refs.productModal.openModal()
                this.loading = false
            }, 500);
        },
        addToCart(item, num = 1) {
            this.loading = true
            this.axios.post(`${this.apiUrl}${this.apiPath}/cart`, {
                data: {
                    product_id: item.id,
                    qty: num
                }
            }).then((res) => {
                alert(res.data.message)
                this.$refs.productModal.closeModal()
                this.loading = false
            }).catch(() => {
                console.error('加入購物車失敗');
            });
        }
    },
    components: {
        ProductModal
    }

}
</script>

<style></style>