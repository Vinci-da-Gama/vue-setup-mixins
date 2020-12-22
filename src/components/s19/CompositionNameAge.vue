<template>
    <section class="composition-container">
        <h2>{{ oneSecondChangedName }}</h2>
        <h2>{{ flName }}</h2>
        <h2>{{ twowaybindName }}</h2>
        <h3>{{ user.name }}</h3>
        <h3>{{ user.age }}</h3>
        <button type="button" @click="setNewAge">Change Age</button>
        <div>
            <input type="text" name="firstName" placeholder="first name" @input="setFirstName" />
            <input type="text" name="lastName" placeholder="last name" ref="lastNameInput" />
            <button type="button" @click="setLastName">Click Set Last Name</button>
        </div>
        <div>
            <input type="text" name="firstNamebind" placeholder="first name" v-model="twowaybindFn" />
            <input type="text" name="lastNamebind" placeholder="last name" v-model="twowaybindLn" />
        </div>
        <hr />
        <h3>{{ reactiveUser.name }}</h3>
        <h3>{{ reactiveUser.age }}</h3>
        <cite>END reactive sample</cite>
        <hr />
        <h3>{{ toRefsName }}</h3>
        <h3>{{ toRefsAge }}</h3>
        <cite>END toRefs sample</cite>
    </section>
</template>

<script>
import { ref, reactive, isRef, isReactive, toRefs, computed } from "vue";
export default {
    name: "CompositionNameAge",
    setup () {
        const uName = ref('Maxi');
        const user = ref({
            name: 'Alexfu',
            age: 31
        });
        const reactiveUser = reactive({
            name: 'LucusFang',
            age: 23
        });
        const reactiveUserSample = reactive({
            name: 'LuffyGuo',
            age: 30
        });
        const firstName = ref('');
        const theLastName = ref('');
        const lastNameInput = ref(null);
        const twowaybindFn = ref('');
        const twowaybindLn = ref('');

        setTimeout(() => {
            uName.value = 'Maximmmmmm'
        }, 1000)

        setTimeout(() => {
            user.value.name = 'fuAlex';
            user.value.age = 32;
        }, 1500)

        const setNewAge = () => {
            user.value.age = 33;
        }
        const setFirstName = (event) => {
            firstName.value = event.target.value;
        }
        const setLastName = () => {
            debugger
            theLastName.value = lastNameInput.value.value;
            debugger
        }

        setTimeout(() => {
            reactiveUser.name = 'FangLucus';
            reactiveUser.age = 24;
        }, 1500)

        const flName = computed(() => {
            return firstName.value + ' ' + theLastName.value;
        })

        const twowaybindName = computed(() => {
            return `${twowaybindFn.value} ${twowaybindLn.value}`;
        })

        console.log('55 -- uName is ref: ', isRef(uName))
        console.log('56 -- reactiveUser is reactive obj: ', isReactive(reactiveUser), reactiveUser.age)

        const toRefsUser = toRefs(reactiveUserSample)

        return {
            oneSecondChangedName: uName,
            user,
            reactiveUser,
            toRefsName: toRefsUser.name,
            toRefsAge: toRefsUser.age,
            setNewAge,
            setFirstName,
            setLastName,
            flName,
            twowaybindFn,
            twowaybindLn,
            twowaybindName
        };
    }
}
</script>

<style lang="scss" scoped>
.composition-container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>