<script setup>
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
  <div>
  <NuxtLayout name="zen">
    <div>This is Login Page</div>
  </NuxtLayout>
</div>
</template>
