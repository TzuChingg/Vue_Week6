<template>
  <div class="text-end">
    <button class="btn btn-outline-danger" type="button" @click="delCart">清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart">
        <tr v-for="(product, index) in  cart.carts " :key="index">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="delProduct(product.id)">
              <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
              x
            </button>
          </td>
          <td>
            {{ product.product.title }}
            <div class="text-success">已套用優惠券</div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <!-- ; changeQty(product.id, num);" -->
                <input min="1" type="number" class="form-control" :value="product.qty"
                  @input="changeQty(product.id, product.product.id, $event.target.valueAsNumber);" />
                <span class=" input-group-text" id="basic-addon2">{{ product.product.unit }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <small class="text-success">折扣價：</small>
            {{ product.product.price }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
  <div class="row justify-content-center">
    <form-component :cart="cart" @updatedCart="getCart"></form-component>

  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
export default {
  data() {
    return {
      apiUrl: import.meta.env.VITE_APIURL,
      apiPath: import.meta.env.VITE_APIPATH,
      cart: [],
      loading: false
    }
  },
  mounted() {
    this.getCart()
  },
  methods: {
    getCart() {
      this.axios.get(`${this.apiUrl}${this.apiPath}/cart`)
        .then((res) => {
          this.cart = res.data.data
        }).catch((err) => {
          alert(err.response.data.message)
        });
    },
    delCart() {
      this.axios.delete(`${this.apiUrl}${this.apiPath}/carts`)
        .then((res) => {
          alert(res.data.message)
          this.getCart()
        }).catch((err) => {
          alert(err.response.data.message);
        });
    },
    delProduct(id) {
      this.loading = true;
      this.axios.delete(`${this.apiUrl}${this.apiPath}/cart/${id}`)
        .then((res) => {
          alert(res.data.message)
          this.loading = false
          this.getCart()
        }).catch((err) => {
          alert(err.response.data.message)
        });
    },
    changeQty(id, product_id, qty) {
      this.loading = true;
      this.axios.put(`${this.apiUrl}${this.apiPath}/cart/${id}`, {
        data: {
          product_id: product_id,
          qty: qty
        }
      })
        .then((res) => {
          alert(res.data.message);
          this.loading = false;
          this.getCart()
        }).catch((err) => {
          console.error(err.response.message);
        });
    }
  },
  components: {
    FormComponent
  }
}
</script>

<style></style>