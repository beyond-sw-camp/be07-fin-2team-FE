import RtcTest from '@/views/untact/RtcTest.vue';
import UntactChatRoom from '@/views/untact/UntactChatRoom.vue';
import UntactTreatList from '@/views/untact/UntactTreatList.vue';
import UntactTreatList2 from '@/views/untact/UntactTreatList2.vue';
import UntactForm from '@/views/untact/UntactForm.vue';
import UntactDetail from '@/views/untact/UntactDetail.vue';


export const untactRouter = [
    // 가짜
    {
        path: '/untact/list2',
        name: 'UntactTreatList',
        component: UntactTreatList
    },
    // 진짜
    {
        path: '/all/untact/list',
        name: 'UntactTreatList2',
        component: UntactTreatList2
    },
    {
        path: '/all/untact/detail/:doctorEmail',
        name: 'UntactDetail',
        component: UntactDetail
    },
    {
        path: '/member/untact/:doctorEmail/form',
        name: 'UntactForm',
        component: UntactForm,
        props:true
    },
    {
        path: '/admin/rooms',
        name: 'RtcTest',
        component: RtcTest
    },
    {
        path: '/member/room/:sid',
        name: 'UntactChatRoom',
        component: UntactChatRoom,
        props: true  // 이 설정을 통해 경로 매개변수를 컴포넌트에 전달
    }
]
