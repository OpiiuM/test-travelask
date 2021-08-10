<template>
  <div class="hotel-card">
    <div class="hotel-card__preview">
      <img :src="image" alt="preview" class="hotel-card__img" />
    </div>
    <div class="hotel-card__info">
      <p class="hotel-card__city">{{ info.address }}</p>
      <p class="hotel-card__title">
        {{ info.name }}
      </p>
      <div class="hotel-card__wrapper">
        <div class="hotel-card__stars">
          <img
            src="@/assets/img/star_default.png"
            alt="star"
            v-for="star in info.stars"
            :key="star"
          />
        </div>
        <span :style="{ display: 'grid', 'align-items': 'center' }">{{
          starStatus
        }}</span>
        <span class="hotel-card__type">{{ info.type }}</span>
      </div>
      <p class="hotel-card__description">
        {{ info.description }}
      </p>
    </div>
    <div class="hotel-card__rate">
      <div class="hotel-card__stat stat">
        <template v-if="info.rating">
          <div class="stat__top">
            <span>
              <img src="@/assets/img/star_red.png" alt="red_star" />
              {{ info.rating }}
            </span>
            <span>
              {{ ratingMark }}
            </span>
            <span>
              {{ reviewStatus }}
            </span>
          </div>
          <p class="stat__review">{{ info["last_review"] }}</p>
        </template>
        <p :style="{ margin: 0 }" v-else>Нет оценок.</p>
      </div>
      <div class="hotel-card__wrap">
        <span class="hotel-card__price">от {{ info["min_price"] }} ₽</span>
        <button class="hotel-card__btn btn">Забронировать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotel-card",
  props: {
    info: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data: () => ({}),
  computed: {
    image() {
      return `https://picsum.photos/280/290?random=${this.index}`;
    },
    starStatus() {
      if (this.info.stars === 1) {
        return `${this.info.stars} звезда`;
      } else if (this.info.stars > 1 && this.info.stars < 5) {
        return `${this.info.stars} звезды`;
      } else {
        return `${this.info.stars} звезд`;
      }
    },
    reviewStatus() {
      const review = this.info["reviews_amount"];

      if (review === 1) {
        return `${review} отзыв`;
      } else if (review > 1 && review < 5) {
        return `${review} отзыва`;
      } else {
        return `${review} отзывов`;
      }
    },
    ratingMark() {
      const rate = Math.round(this.info.rating);
      return rate === 5 ? "Отлично" : rate === 4 ? "Хорошо" : "Ужасно";
    },
  },
};
</script>

<style lang="scss">
.hotel-card {
  display: grid;
  grid-template: 1fr / 280px 1fr 290px;
  justify-content: space-between;
  align-items: start;
  grid-gap: 20px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #f3efea;

  &__img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__city {
    font-size: 13px;
    line-height: 17px;
    color: #515151;
  }

  &__title {
    font-weight: bold;
    font-size: 21px;
    line-height: 24px;
    color: #000;
  }

  &__wrapper {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    justify-content: start;
    grid-gap: 15px;
  }

  &__stars {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  &__type {
    padding: 0.5em 1em;
    border: 1px solid #d4d4d4;
    font-size: 15px;
    line-height: 17px;
    color: #515151;
  }

  &__description {
    margin-top: 15px;
    font-size: 14px;
    line-height: 20px;
  }

  &__rate {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__stat {
    padding: 20px 15px;
    background: #f9f7f2;
  }

  &__wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: 17px;
    line-height: 17px;
    font-weight: bold;
    color: #000;
  }

  &__btn {
    background: #ff4641;
    color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
      background: darken(#ff4641, 15%);
    }
  }
}

.stat {
  &__top {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 10px;
  }

  &__review {
    margin-top: 15px;
  }
}

.hotel-card + .hotel-card {
  margin-top: 20px;
}
</style>