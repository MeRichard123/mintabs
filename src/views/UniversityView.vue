<template>
  <section class="flexBasic flex-wrap flex-width">
    <a v-for="link in links" :key="link.name" :href="link.link">
      <div
        class="p-8 text-2xl m-5 card dark:card-dark text-center themeText flexBasic"
      >
        <h3>{{ link.name }}</h3>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'UniversityView',
  data() {
    return {
      links: [
        { name: 'Timetable', link: 'https://timetable.lincoln.ac.uk' },
        {
          name: 'Accommodation',
          link: 'https://accommodationbooking.lincoln.ac.uk/Student_Portal/Account/Login?ReturnUrl=%2fStudent_Portal%2fHome%2fHome',
        },
        { name: 'Gateway', link: 'https://gateway.lincoln.ac.uk/' },
        { name: 'Blackboard', link: 'https://blackboard.lincoln.ac.uk' },
        { name: 'E-Mail', link: 'https://outlook.office.com/mail/' },
        { name: 'Calendar', link: 'https://calendar.google.com/calendar/' },
        { name: 'Notion', link: 'https://www.notion.so/' },
        {
          name: 'OneDrive',
          link: 'https://onedrive.live.com/about/en-gb/signin/',
        },
        {
          name: 'OneUni',
          link: 'https://uol.t1cloud.com/T1Default/CiAnywhere/Web/UOL/Workplace',
        },
      ],
    };
  },
};
</script>
