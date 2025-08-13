<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
}

const particles = ref<Particle[]>([]);

onMounted(() => {
  const colors = ["blue", "--neon-blue", "--neon-purple", "--neon-cyan"];

  // Create initial particles
  particles.value = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 0.5 + 0.1,
    direction: Math.random() * Math.PI * 2,
  }));

  const animateParticles = () => {
    particles.value = particles.value.map((particle) => ({
      ...particle,
      x:
        (particle.x +
          Math.cos(particle.direction) * particle.speed +
          window.innerWidth) %
        window.innerWidth,
      y:
        (particle.y +
          Math.sin(particle.direction) * particle.speed +
          window.innerHeight) %
        window.innerHeight,
    }));
  };

  const interval = setInterval(animateParticles, 50);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="fixed inset-0 pointer-events-none">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="absolute rounded-full opacity-60"
      :style="{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: `hsl(var(${particle.color}))`,
        boxShadow: `0 0 ${particle.size * 2}px hsl(var(${particle.color}))`,
      }"
    ></div>
  </div>
</template>
