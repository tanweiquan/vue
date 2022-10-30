<template>
    <div>
        <!-- 插槽 -->
        <div class="at">
            <slot name="header"></slot>
        </div>
        <div class="bt">
            <slot name="content"></slot>
        </div>
        <div class="ct">
            <slot name="footer"></slot>
        </div>
    </div>
</template>