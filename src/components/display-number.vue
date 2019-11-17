<template>
    <p>The Number is:{{number}}</p>
</template>

<script>
export default
{
    props:
    {
        number:
        {
            type:Number,
            required:true,
            val(value)
            {
                return value > 0;
            }
        }
    }
}
</script>
