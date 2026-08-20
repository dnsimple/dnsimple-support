<template>
    <div class="footer">
        <p>
            <span>Can't find what you are looking for?</span>
            <a
                :href="app.getContactUrl()"
                class="button"
                target="_blank"
            >
                Get in touch
                <span>&nbsp; &rarr;</span>
            </a>
        </p>
    </div>
</template>

<script>
export default {
  props: ['app']
};
</script>
