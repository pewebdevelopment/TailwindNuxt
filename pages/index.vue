<script setup>
import { reactive } from "vue";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import { useRouter } from "vue-router";

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
  remember: true,
});
// const router = useRouter();
// const submit = () => {
//   router.push("/dashboard");
// };
</script>

<template>
  <NuxtLayout>

    <Zen></Zen>

    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">



        <template #footer>
            <BaseButtons>
              <BaseButton type="submit" color="info" label="Login" />
              <BaseButton to="/dashboard" color="info" outline label="Back" />
            </BaseButtons>
          </template>
      </CardBox>

    </SectionFullScreen>



  </NuxtLayout>
</template>