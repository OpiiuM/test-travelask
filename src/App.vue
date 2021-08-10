<template>
  <v-app>
    <v-main>
      <div class="content">
        <div class="content__sidebar sidebar">
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Поиск по странам и городам</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <input
                  class="input"
                  type="text"
                  placeholder="Введите страну, например, Россия"
                  v-model="filt.country"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Звезды</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox
                  v-model="filt.stars"
                  label="Без звезд"
                  value="0"
                ></v-checkbox>
                <v-checkbox
                  v-model="filt.stars"
                  label="1 звезда"
                  value="1"
                ></v-checkbox>
                <v-checkbox
                  v-model="filt.stars"
                  label="2 звезды"
                  value="2"
                ></v-checkbox>
                <v-checkbox
                  v-model="filt.stars"
                  label="3 звезды"
                  value="3"
                ></v-checkbox>
                <v-checkbox
                  v-model="filt.stars"
                  label="4 звезды"
                  value="4"
                ></v-checkbox>
                <v-checkbox
                  v-model="filt.stars"
                  label="5 звезд"
                  value="5"
                ></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Тип</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-combobox
                  v-model="filt.type"
                  :items="items"
                  multiple
                  chips
                ></v-combobox>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Цена</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-slider
                  v-model="filt.price"
                  thumb-label
                  min="0"
                  max="9999"
                ></v-slider>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <button class="sidebar__btn btn" @click.prevent="resetFilt">
            <i class="fas fa-redo-alt"></i>
            Сбросить все фильтры
          </button>
        </div>
        <div class="content__list list">
          <template v-if="filteredHotels.length">
            <hotel-card
              v-for="(hotel, idx) in filteredHotels"
              :key="idx"
              :info="hotel"
              :index="idx"
            />
          </template>
          <p v-else>Ничего не найдено</p>
          <button class="list__btn btn" @click.prevent="showMore">
            Показать еще отели
          </button>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HotelCard from "./components/HotelCard.vue";

export default {
  name: "App",
  components: { HotelCard },
  data: () => ({
    hotels: [],
    panel: [0, 1, 2, 3],
    items: ["Отели", "Апартаменты"],

    filt: {
      country: "",
      stars: ["4"],
      type: [],
      price: 0,
    },
  }),
  methods: {
    resetFilt() {
      this.filt = {
        country: "",
        stars: ["4"],
        type: [],
        price: 0,
      };
    },
    showMore() {},
  },
  computed: {
    filteredHotels() {
      return [
        ...new Set([
          ...this.filteredCountry,
          ...this.filteredStars,
          ...this.filteredType,
          ...this.filteredPrice,
        ]),
      ];
    },

    filteredCountry() {
      return this.hotels.filter((hotel) =>
        hotel.country.toLowerCase().includes(this.filt.country.toLowerCase())
      );
    },
    filteredStars() {
      return this.hotels.filter((hotel) =>
        this.filt.stars.includes(hotel.stars.toString())
      );
    },
    filteredType() {
      return this.hotels.filter((hotel) => this.filt.type.includes(hotel.type));
    },
    filteredPrice() {
      return this.hotels.filter(
        (hotel) => hotel["min_price"] >= this.filt.price
      );
    },
  },
  async mounted() {
    this.hotels = await this.$store.dispatch("loadHotels");
  },
};
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template: 1fr / 0.35fr 1fr;
  align-items: start;
  grid-gap: 20px;
  margin-top: 10px;
  padding: 0 10px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__btn {
    transition: 0.3s ease;

    &:hover {
      color: #ff4641;
    }
  }
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__btn {
    margin-top: 30px;
    border: 2px solid #f0eade;
    font-weight: bold;
  }
}

.btn {
  padding: 1.2em;
  font-size: 14px;
  line-height: 17px;
  border-radius: 2px;
}

.input {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #a9a9a9;

  &:focus {
    border-bottom: 1px solid #ff4641;
    outline: none;
  }
}
</style>