<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
  remember: true,
});
const router = useRouter();
const submit = () => {
  router.push("/dashboard");
};
</script>

<template>
  <NuxtLayout>
    <h1>This is a simple H1 Tag</h1>
  </NuxtLayout>
</template>