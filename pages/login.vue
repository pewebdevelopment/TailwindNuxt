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
  <NuxtLayout name="">
    <div>This is Login Page</div>
  </NuxtLayout>
  
</template>
