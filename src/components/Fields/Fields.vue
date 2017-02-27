<template>
  <div class="container">
    <div class="fields">
      <h1>Please, indicate your interests...</h1>
      <div class="row" v-if="selectedFields.length > 0">
        <div class="selectedFields">
          <span class="badge badge-pill badge-warning"
                v-for="(item, index) in selectedFields"
                @click="removeFromSelection(index)">
            <span class="field">{{ item.item.name }}</span>
            <button type="button" class="close">
              <span>&times;</span>
            </button>
          </span>
        </div>
        <span class="done">
          <a :class="'btn btn-default btn-sm btn-done'" @click="submitSelection()">Ready!</router-link>
         </span>
      </div>
      <div class="alert alert-default" v-if="isLoading">
        <img src="../../assets/infinity.gif" />
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2" v-for="(f, index) in fields">
          <div class="card" @click="addToSelections(index)">
            <div class="card-block">
              <i v-bind:class="f.icon + ' fa-2x icon'" aria-hidden="true"></i>
              <h6 class="card-title">{{ f.name }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fields",
  data() {
    return {
      isLoading: true,
      fields: [],
      selectedFields: []
    }
  },
  methods: {
    addToSelections(index) {
      // TODO \\
      // Returns an object which has id/index of the
      // selected element and element itself.
      const selected = (function(index, array) {
        const temp = array.splice(index, 1)[0];
        return {
          index: index,
          item: temp
        }
      });
      const item = selected(index, this.fields);
      this.selectedFields.push(item);
    },
    removeFromSelection(index) {
      // Removes the item from selections and inserts
      // back to its original index.
      const item = this.selectedFields.splice(index,1)[0];
      this.fields.splice(item.id, 0, item.item);
    },
    submitSelection() {
      this.$root.$data.data = this.selectedFields;
      this.$router.push('Preview');
    }
  },
  created() {
    fetch('./data.json')
    .then((res) => { return res.json() })
    .then((res) => {
      this.fields = res.data;
      this.isLoading = false;
    })
  }
}
</script>

<style>
  body{
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background: rgba(44, 62, 80, 1);
  }
  .fields {
    padding: 30px;
    max-height: 80vh;
    overflow: scroll;
    border-radius: 5px;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 102, 0, 1);
  }
  .card {
    margin: 5px auto;
    min-height: 120px;
    transition: .5s ease-in-out;
    background: none;
    border: 1px solid rgba(255, 102, 0, 0.8);
  }
  .card:hover {
    color: #FFF;
    cursor: pointer;
    background: rgba(26, 37, 47, .9);
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }
  .card-title {
    text-align: center;
    width: 100%;
    margin: auto 2px;
    word-wrap: break-word;
  }
  .card-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon{
    margin: 3px;
  }
  .selectedFields {
    text-align: left;
    width: 100%;
    height: auto;
    margin: 10px 0 0 0;
    padding: 5px;
    float: left;
    background: rgba(26, 37, 47, 1);
    border-radius: 5px;
    border-top: 1px solid rgba(26, 37, 47, 1);
    border-bottom: 1px solid rgba(26, 37, 47, 1);
  }
  span.done{
    width: 100%;
    text-align: right;
  }
  span.done > a {
    margin: 5px auto;
    border-radius: 5px;
    min-width: 100px;
    background: rgba(44, 62, 100, 1);
    color: #FFF;
  }
  span.done > a:hover {
    background: rgba(26, 37, 47, 1);
    cursor: pointer;
  }
  div.selectedFields > span > button {
    margin: auto 5px;
    outline: 0;
    font-size: small !important;
    color: #f60 !important;
    text-shadow: none;
  }
  div.selectedFields > span.badge {
    margin: 3px;
    padding: 5px;
    cursor: crosshair;
    background: rgba(44, 62, 120, 1);
  }
</style>
