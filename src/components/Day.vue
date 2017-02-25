<!-- день сменяется в 24:00-->
<!-- начало занятий сохраняется и отсчет идет от этой даты-->
<!-- замеряется время от начала до конца-->
<!-- при вводе числа и нажатии enter ответ записывается и сравнивается с правильным ответом-->
<!-- а затем появляется следующий вопрос -->
<!-- при верном ответе прибавляется 1 в переменную-->
<!-- при ложном ответе вычитается 1 из переменной-->
<!-- при желании можно возобновить текущий день-->
<!-- при этом показываются результаты всех попыток-->


<template>
    <div>
        <h1>{{ title }}</h1>
        <!--<a href="/result">Result</a>-->
        <h2>{{currentQuestion}}</h2>
        <form @submit.prevent="changeQuestion">
            <input type="number" class="answer_input" v-model="inputValue">
        </form>
        <p>Количество верных ответов: {{totalRightAnswers}} из {{questionNumber}}</p>
        <p>Количество неверных ответов: {{totalWrongAnswers}}</p>
        <p>Время потраченное на решение примеров: {{timeSpend}}</p>
    </div>
</template>

<script>
  import * as task from '../tasks.json';

  export default {
    name: 'day',
    data() {
      return {
        title: 'Первый день',
        day: 1,
        questionNumber: 1,
        task,
        timeSpend: 0,
        inputValue: '',
        rightAnswers: 0,
        wrongAnswers: 0,
      };
    },
    computed: {
      currentQuestion() {
        return this.task[this.day][this.questionNumber].question;
      },
      totalRightAnswers() {
        if (+this.inputValue === +this.task[this.day][this.questionNumber].answer) {
          this.rightAnswers += 1;
        }
        return this.rightAnswers;
      },
      totalWrongAnswers() {
        if (+this.inputValue !== +this.task[this.day][this.questionNumber].answer && this.inputValue !== '' && this.questionNumber < 8) {
          this.wrongAnswers += 1;
        }
        return this.wrongAnswers;
      },
    },
    methods: {
      changeQuestion() {
        if (this.questionNumber <= 7) {
          this.questionNumber += 1;
          this.inputValue = '';
//          console.log(this.task[this.day][this.questionNumber - 1].answer);
        }
      },
    },
  };
</script>
<style scoped>
    h1 {
        font-weight: normal;
    }

    h2 {
        font-size: 2rem;
    }

    a {
        color: #42b983;
    }

    .answer_input {
        padding: 1rem;
        font-size: 2rem;
        outline: none;
        border: 1px solid #1ABC9C;
        color: #42b983;
        margin-bottom: 5rem;
    }
</style>
