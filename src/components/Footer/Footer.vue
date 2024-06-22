<template>
  <footer class="Footer">
    <div class="container">
      <div class="Footer__inner">
        <p class="Footer-text">&copy; {{ title }} {{ country }}, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      title: 'Template',
      country: 'USA',
    };
  },
};
</script>
