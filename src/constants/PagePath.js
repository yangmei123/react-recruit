import React from 'react';

const Recruit = React.lazy(() => import('@/pages/recruit/Recruit'));
const RecruitDetail = React.lazy(() => import('@/pages/recruit/RecruitDetail'));

export function recruit() {
    return {
        path: '/recruit',
        component: Recruit
    }
} 

export function recruitDetail() {
    return {
        path: '/recruitDetail/:id',
        name: '/recruitDetail/',
        component: RecruitDetail
    }
} 