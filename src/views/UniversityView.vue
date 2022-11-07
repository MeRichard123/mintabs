<template>
    <section class="flexBasic flex-wrap">
        <a v-for="link in links" :key="link.name" :href="link.link">
            <div class="p-8 text-2xl m-5 card text-center themeText flexBasic">
                <h3>{{link.name}}</h3>
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
        { name: 'Accommodation', link: 'https://accommodationbooking.lincoln.ac.uk/Student_Portal/Account/Login?ReturnUrl=%2fStudent_Portal%2fHome%2fHome' },
        { name: 'Gateway', link: 'https://gateway.lincoln.ac.uk/' },
        { name: 'Blackboard', link: 'https://blackboard.lincoln.ac.uk' },
        { name: 'E-Mail', link: 'https://outlook.office.com/mail/' },
        { name: 'Calendar', link: 'https://calendar.google.com/calendar/' },
        { name: 'Societies', link: 'https://lincolnsu.com/activities/sports-and-societies' },
        { name: 'Notion', link: 'https://www.notion.so/' },
        { name: 'OneDrive', link: 'https://onedrive.live.com/about/en-gb/signin/' },
      ],
    };
  },

};
</script>
<style>
    .card{
        width: 220px;
        height: 220px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .card:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

</style>
