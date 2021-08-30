<template>
  <div class="StamboomTotaal">
    <div class="StamboomIntro">
      <b-jumbotron bg-variant="light" header="Stamboom" lead="Genealogie van de Gulichers en verder terug">
        <p>
        Mijn naam is Florian. Niemand kent mij maar ik ben eigenlijk een soort koning, zonder dat mensen dat van me weten. Maar hoe kan het dan dat
        ik niet met een scepter in mijn hand door de straten loop? Omdat er een hele hoop generaties tussen hebben gezeten. geloof me, 
        als het aan mij had gelegen, dan waren we nog steeds royals. Er zijn tussendoor allerlei dingen gebeurt, de afstamming verliep namelijk
        via een van de buitenechtelijke zonen van Graaf Adolf van Egmont, Hertog van Gelre. Deze graaf stamt af van Franse en Engelse koningen 
        en Duitse Keizers, en nog meer adel van landen die nu al niet eens meer bestaan.
        En doordat vrouwen volgens gebruik de achternaam van de man aannemen, is mijn achternaam nu Gulicher, 
        en niet van Egmont of Philipp 1, koning van Frankrijk. 
        Dus denk de volgende keer nog eens 2x na voordat u mij op de bon slingert! (hier invoegen: filmpje van adel)
        Nu eerst nog maar eens kijken of ik een baan kan vinden waarmee ik in mijn levensonderhoud kan voorzien en een prettig bestaan kan leiden.
        hieronder staat de hele tak van de stamboom die in 1 rechte lijn van Adolf van Egmont naar yours truly leidt.  
        </p>
        <b-button variant="primary" href="#">Naar de uitleg</b-button>
      </b-jumbotron>
    </div>
    <p></p>
    <div class="StamboomLijst">
      <b-jumbotron bg-variant="light">
        <b-list-group>
          <b-list-group-item
          >
            hier komt de lijst uit de object double moustache en in blistgroupitem de functie als attribute
          </b-list-group-item>
        </b-list-group>
        <b-button
        > 
          Reverse Order
        </b-button>
      </b-jumbotron>
    </div>
  </div>  

  <!--
      <b-list-group>
        <b-list-group-item 
          v-for="(shuffledAnswer, index) in shuffledAnswers" :key="index"
          @click="selectAnswer(index)"
          :class="answerClass(index)"
        >
        <!-- @click="selectAnswer(index)" dit betekent dat bij een click hetspecifieke indexnummer van het antwoord waarop geklikt was wordt meegegeven aan de functie. de index wordt gegeven aan elke shuffledAnswer in de v-for. -->
        <!-- de class zoals ie was toen ie  alleen nog maar de selected een ander kleurtje gaf:
        :class="[selectedIndex === index ? 'selected' : '']"-->
        <!-- de class zoals ie was toen ie  nog niet in de method stond
        (made :class="answerClass(index)" into a method)
        :class="[
        !answered && selectedIndex === index ? 'selected' :
        answered && correctIndex === index ? 'correct' :
        answered && selectedIndex === index && correctIndex !== index ? 'incorrect' : ''
        ]"  ->
          {{shuffledAnswer}}
          <!-- hier had ik answers veranderd in shuffledAnswer maar zo doet zij van de tutorial het niet, en het zorgde ervoor dat bij een refresh de eerste vragen niet geladen werden omdat shuffledAnswers niet berekend was nog of zo iets moet het zijn. PS 24-8-2020 nu werkt het wel, met 3x shuffledAnswer(s) hier. answers is dus veranderd in shuffledAnswer, en als je een fout hebt in het tonen terwijl de data wel goed is, moet je dus hier zijn in de template. enige punt is nog dat zij het schijnbaar niet zo gedaan heeft, er staat bij haar nog steeds {{answer}} ->
        </b-list-group-item>
      </b-list-group>
      <!-- eerst hadden we het in een p voordat we het in een list zetten
      <p v-for="(answer, index) in answers" :key="index">
        {{answer}}
      </p> <!- before we can render {{}} we need to put each answer in a new paragraph, using for answer in answers. we gebruikten al een keer index om aan te geven bij welke vraag we zijn, maar dat is niet dezelfde, dit is een nieuwe. nu moeten we door het antwoordenlijstje to create a for loop that creates a new paragraph tag for each answer. it needs a unique key functioning as an index, which is what the index argument makes for you. but in essence this line is just 'for answer in answers' create a new paragraph. --> <!-- <p v-for="answer in answers " :key="answer"> had ook gekunt omdat ieder antwoord uniek is. als het niet uniek is moet je een index gebruiken. volgens mij is een index gebruiken wat je gewoon al automatisch doet in een JS for loop.-->
        <!-- hoe dit precies werkt is mij ook nog steeds een raadsel  want we geven nergens aan dat het een nieuwe item alinea moet maken voor elk antwoord alleen dat we hem een index mee moeten geven. zal wel een vue automatisme zijn PS 24-8-2020 lijkt me wel logisch, <p v-for betekent dat ie zolang als kan een nieuwe <p> zal blijven maken en in die <p> staat {{answer}} ->

  -->
</template>
