<template>
  <div class="w-full h-full">
    <div ref="mapRef" class="w-full h-full min-h-[400px] rounded-lg"></div>
  </div>
</template>

<script setup>
import { Loader } from '@googlemaps/js-api-loader';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  apiKey: {
    type: String,
    required: true
  },
  center: {
    type: Object,
    default: () => ({ lat: 5.6037, lng: -0.1870 }) // Default to Accra coordinates
  },
  zoom: {
    type: Number,
    default: 15
  },
  marker: {
    type: Object,
    default: null
  },
  styles: {
    type: Array,
    default: () => []
  }
});

const mapRef = ref(null);
let map = null;
let marker = null;

const initMap = async () => {
  try {
    const loader = new Loader({
      apiKey: props.apiKey,
      version: 'weekly',
      libraries: ['places']
    });

    await loader.load();
    
    // Initialize the map
    map = new google.maps.Map(mapRef.value, {
      center: props.center,
      zoom: props.zoom,
      styles: props.styles,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      mapTypeId: 'roadmap'
    });

    // Add marker if provided
    if (props.marker) {
      marker = new google.maps.Marker({
        position: props.marker.position || props.center,
        map: map,
        title: props.marker.title || 'Location',
        animation: google.maps.Animation.DROP
      });

      // Add info window if provided
      if (props.marker.info) {
        const infoWindow = new google.maps.InfoWindow({
          content: props.marker.info
        });
        
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    }
  } catch (error) {
    console.error('Error initializing Google Maps:', error);
  }
};

onMounted(() => {
  if (process.client) {
    initMap();
  }
});

onBeforeUnmount(() => {
  if (marker) {
    marker.setMap(null);
  }
  if (map) {
    google.maps.event.clearInstanceListeners(map);
  }
});
</script>
