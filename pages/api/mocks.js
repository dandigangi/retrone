export const MOCKS = {
    user: {
        authenticated: true,
        avatar: 'users/09f41154-6eab-4037-99fd-51f6a8d8c0bc/avatar.png',
        id: '09f41154-6eab-4037-99fd-51f6a8d8c0bc',
        name: 'John Smith',
    },
    settings: {
        boardAutoCloseTimer: 3,
        useBoardRouteSlug: true,
    },
    boards: [
        {
            id: 1,
            name: 'Test Board 1',
            slug: 'test-board-1',
            settings: {
                maxCardsPerColumn: 3,
                maxVotesPerColumn: 3,
            },
            columns: [
                {
                    id: 1,
                    name: 'What Went Well',
                },
                {
                    id: 2,
                    name: "What Didn't Go Well",
                },
            ],
            cards: [
                // What Went Well
                {
                    id: 1,
                    columnId: 1,
                    message:
                        'Grooming was more effective than usual. Finished a lot of tickets! Great requirements.',
                },
                {
                    id: 2,
                    columnId: 1,
                    message:
                        'Shoutout to Tanvi for completing FPP. Work was complex and took a lot of effort.',
                },
                {
                    id: 3,
                    columnId: 1,
                    message: 'Less meetings and more focus time was nice.',
                },

                // What Didn't Go Well
                {
                    id: 1,
                    columnId: 1,
                    message:
                        "Last minute bugs came in. Took a lot of time. Didn't finish rest of sprint because of isTargetLikeServerless.",
                },
                {
                    id: 2,
                    columnId: 1,
                    message:
                        'ESLint keeps failing the builds in the QA env pipeline and PRs won\t merge. Wtf.',
                },
            ],
        },
        {
            id: 2,
            name: 'Team Toyota - R2.3 Sprint 5',
            slug: 'toyota-r23-s5',
            settings: {
                maxCardsPerColumn: 5,
                maxVotesPerColumn: 10,
            },
            columns: [
                {
                    id: 1,
                    name: 'What Went Well',
                },
                {
                    id: 2,
                    name: "What Didn't Go Well",
                },
            ],
            cards: [
                // What Went Well
                {
                    id: 1,
                    columnId: 1,
                    message:
                        'Grooming was more effective than usual. Finished a lot of tickets! Great requirements.',
                },
                {
                    id: 2,
                    columnId: 1,
                    message:
                        'Shoutout to Tanvi for completing FPP. Work was complex and took a lot of effort.',
                },
                {
                    id: 3,
                    columnId: 1,
                    message: 'Less meetings and more focus time was nice.',
                },

                // What Didn't Go Well
                {
                    id: 1,
                    columnId: 1,
                    message:
                        "Last minute bugs came in. Took a lot of time. Didn't finish rest of sprint because of isTargetLikeServerless.",
                },
                {
                    id: 2,
                    columnId: 1,
                    message:
                        'ESLint keeps failing the builds in the QA env pipeline and PRs won\t merge. Wtf.',
                },
            ],
        },
    ],
};
