// Variables
const writen_google_drive_ids = {
    'Chapters': [
        {'title': 'TOTW #1', 'content': [
            '1X2RS296nQoZK1yf315O2FzfypYyiaou5',
            '14V_plLQ53d0zZ-yOdtddmiaL0JRm46z0',
            '1zguBmiptF8GEXFYALwdNnOYibb-aEQkg',
            '1TrdhVoprR59zhCJ_Mgh5kqtvbamQ2STo',
            '1DOIVayDsuSfWh7dgKzdQ1hpEMveZSeqe',
            '1s-YlH7jWScOFc87KKpoyq22Ow2r3ndy2',
        ]}, {'title': 'TOTW #1 Remaster', 'content': [
            '1erC2MQ9N9NS8CGXgBukv-Id-kXNy_zOb',
            '10ZUMVY2Gf_vc90yX69SL52jfRjcgPbv3',
            '1iVMuPg3RyUJOazxWYp1hJsTleVCbwVeb',
            '1D2pS_A4krrimB8naDyX6TOOd5JK1B--V',
            '1tOqQ7UaBJv9mDouwoazHUbaAGLOqWbrq',
            '1gUYBNB4n7CFf8pD8dQoCWffPeCNxK-vo',
        ]}, {'title': 'TOTW #2', 'content': [
            '1w45SA0_qGkoOd5Aldk8PxQ3EjKFmYqgW',
            '1uLzUoj59vqFHhFFqwRnb-yOodcvFU0HM',
            '1AmmPaI0kc4maeHKX54nVGw5nAblrlIMT',
            '1wAeMC_K44RUo6vdkvqYu-bSuJNOlhVc2',
            '1c940ITzuvbSQeZa9GmJB4Nx36crFARDq',
            '1weMsdu4GYISPVOTOQK1FLRVpCHbuYeOv',
        ]}, {'title': 'TOTW #3', 'content': [
            '1Sh-0aqMn6On4LYff7nJQp_c439MS3RbJ',
            '1FfYCKpolQlP623h6qER_wXc71tXzebXO',
            '1BXVdYAzxLdG02JXkNNiUq1cm0opg6w_8',
            '1g48kEZFERj9t98qNgcQEvHGUEOMEGrC8',
            '1LEtioIZSnWZ2fMSKwsJu9KuZBl7dTTQe',
            '1tbfo_MMBViU4Jdsuf5lmPSAfD45FX2yT',
        ]}, {'title': 'TOTW #4', 'content': [
            '1ZX5w21roU4SbwLopnuNjp7ZTHtQVFm7h',
            '14n_-STupfpE-NV5xHL5AkPPVrBvAtbJA',
            '1J62gPXdGEptcTHlqNCGGw-jXOn7NApFY',
            '11uPwxI5_S1J_LNvAf7EmwOA6vJ0HdzWt',
            '1POXZ-Cm58PkueTyAcxT0HWbXLb8hHphL',
            '1TAHq-su4nAStd0TY1ZhscuQQOWrQKgie',
        ]}, {'title': 'TOTW #5', 'content': [
            '1SqsdhJtPNb0peIM_huymxB5PH9TZ5OpZ',
            '1F-HQDZMiLcDQneI9o6Mv22yroFe4tiXO',
            '1uAx3lR2eA29VqLKIDz_Cs9vRW-xDSzXn',
            '159z9pPn9cOR9X2bw0G2HYpUVBOq_F5cM',
            '1rylFdQPN8sFC4v7WdIwdX9US6GvbT_tX',
            '1L35jbTdOGWL_A4jXrMIMgsc0pcF6Ou-v',
        ]}, {'title': 'TOTW #6', 'content': [
            '14QeswNjRcPQOZh3e33KZsP9k6jWix1vf',
            '1cx4sCO6KkjdAeVMLMFTRHWFhaAGgfWBh',
            '1oL7nyGOTB4o8V0rs49_nJzmiEKlIBVdf',
            '11bIyQJ0n0IdXNt_opXtawu_KYltLjTT3',
            '1Tw_tTqSXHZEX8D6MRsXNarv0wRSpb1Fi',
            '1GO4g-NhUEa5tUnvz3x48kB6HVWaDouji',
        ]}, {'title': 'TOTW #7', 'content': [
            '1NduCapf9mtUZhsYlgO5qZbGX_vn_ChsV',
            '157NdJ2FDpGj6c3C3E4WnXvSdEivliPIw',
            '1mlrRHZ3aiH9-dgvacKZm4uL-9rDB3rx8',
            '15gOP5PM5qgbCmgc_XTTmTBL5Ptk-oUZA',
            '1KRaYKimawKHGGIXDuue-gTVosG79zFPA',
            '1aPkst4qdZNl4ZD1ldg72K1smgK24yAYs',
        ]}, {'title': 'TOTW #8', 'content': [
            '1y8cuoFQwcdnG9bnhRw9eCqjQFfOR3706',
            '1k2xpnECm9L8YKY1R3qx_2QyZs59NDgXn',
            '1qhX1tuMhtB09CJpiSEIDQFiPCxr7xA8X',
            '1g4igGZQELMsq70YgXJKlQlM9MILudV9_',
            '1C7PoCcr11LuPNWgIJi3uI2HD7olxVUOR',
            '17ivN6Ecab3dNihnuyn2x5ENMvu-tgw2m',
        ]}, {'title': 'TOTW #9', 'content': [
            '15ei-PVU1GBNhw7S-FVUWSmlJ8zz1CoYQ',
            '1HVsJV78zDPr1CgZzxRO-GRrwU4tD4FiM',
            '1fF5wTmGNnQXZcUx-EL4bdRm2b8gEQhvz',
            '1oWEXvOhhG0Dv-5UzjPeKkO80_LswHisr',
            '1vMDXPoM0ZbykkfhM_yY6bZwuLb1iiZn2',
            '1XQIkLgRLNk0yuBsmqqJmvEOvlTPJ6yNj',
            '1OQD_CnuSfZF1Sy5uCC74OxuHH8AF8HXn',
            '1cjrpELNzS6sVfad9x95xGwARnUt1TzKL',
            '1eW61oqljBXdbZ9fIO9SkiXWjpVjb37r_',
            '1x1osm5q1weYs-CkT-QfApupAVOmCBCPN',
            '1vuqDiClCBvZ4nm0OFCXs09cdB518Hh8g',
        ]}, {'title': 'TOTW #10', 'content': [
            '11bSaIwnF6IDWkgOHIFZD3zC8jGX02PPV',
            '10ks40LSqvOacoGgOpSewDhcIhL5RFEXn',
            '1MSqYx6ywF9YRUvpxEg6-zsIs6ULcLTCX',
            '1DV6lmYRO1UOqvSqkFLwCdidz-rbdmznD',
            '1YTY5XiU15c_LTwfv1cQ6LcnMXQ7iMkVW',
            '13ZQPODgzM68BjiXOFHAHWBrUNPn6o5WJ',
        ]}, {'title': 'TOTW #11', 'content': [
            '1nF4lgmtVjTarYA3eTgBVfwRy_h4r4nhB',
            '1VKoF2jSAv9Izaqn7yWUXsxMvThuVvApc',
            '10z14MugJeUeIxQfjj7rXzBiM4GhVXdY8',
            '1bxb3irVUGqEY6ryHHY1AC891dJw_aYcg',
            '1tjF6L_aG2uJK8dz-jRetbxmgfYMGOZON',
            '1v-86L5s9bG4_m2ktbGX1Cz_NRwbxiAMY',
        ]}, {'title': 'TOTW #12', 'content': [
            '1XCs9-aGZypNec2tmcpkZq8I9yO3jEP4m',
            '1TLcpJEw74FCm_UIghdFmlFXi_Av5MV6-',
            '1wcrcTp28S1bzBVSSTBjRb5Zm0GEGXn20',
            '1XafUs1H0yooRxRnFdVO8UoGaTNCt-dMg',
            '1SlELVqR5krWkWLywLimYiMiuCJeRKZcN',
            '1xX-gQAmIrwxANDv6SAgR9FYMCqzo-IFd',
            '1mkmtLrYN-JUfYCEGc39f_n9MeUvdzLxe',
        ]}, {'title': 'TOTW #13', 'content': [
            '1ND4Q2n263Q38-mKjmC5c-lxQObj0wpWf',
            '1OdFZbWtQ23QRabf2KGMjgt7eXfFuTMQl',
            '1Zmnux-_vRvBcR91sN_mpsRB437_J4SvU',
            '19HHYf6jwP4Lj39Fu64Xo51CctraDImTI',
            '1dCp9V2dj4XRmsmB4-084jJPAAS3KyFL4',
            '1M1xPkTJYkR4PNkbTJrgoPRGS4qfXQxhf',
            '1gc8QiMiGWB5bWBsZpwC-X_YgWMFH6pew',
            '1LqUs21xuzWnm5VGJPrzGbMk85w_WMLr6',
            '1zNML-1cWxsW4aPjMAe_1zMYQ1J5mjZ0Z',
            '1BBwbOIVmfhE015x9Ebai3VGZ4LwlLYGv',
            '1h6LqzVuuuFuoF6-9q15tiiu00c4uBhyP',
            '17TA6udr92sQ8CaCj9mC1xNPuOglo0ymu',
            '1qw747ddHe_Gc2XyGp2001LdjRUEbYiKO',
            '1Q_Xzf4Fs6hUx4s_NTnu470KLsXUAFLqB',
            '14N9JFS1eXEEuTxT3qrm0TqGIvYDTU_Z8',
        ]}, {'title': 'TOTW #14', 'content': [
            '1rlWRZ_uMlYQjasCXHynruyOECKDbfspy',
            '1IKtQsX9WNQM92mWxyjDXsRd3lDSqN3BJ',
            '14f_cV6dJcooKSgi1Eu26fTRZkqK06weW',
            '1bt5DmPPzk5oNINn3ROSRI0bLAjU3AJPP',
            '1ciwMHbfdq0iLWlELMUxmqCdfOlMf7Qex',
            '1QT3mr6Qp2-VqTFycyX2D7ol0ciAL_FDe',
        ]}, {'title': 'TOTW #15', 'content': [
            '1u6JJtjCQmklJbasSL2ejj1-gyLrJrpoI',
            '1b_rKdubCjw5RZbD8txfTtTJ_NF2sRrTc',
            '1z9pK-ZCPu9mLzTsqTnmR69_TbEHJQgXE',
            '1mLd2J3VknwqQfBw2cuD1YRz43SBJvYcf',
            '1-1-AO_XDE6G2niw0m2PI-BOAUHOiRerq',
            '1oc19DH4ZkrdBMVzHdaMGfx4JntJQ6Xnf',
            '1yxHlkaFgk3-mikeVZgJ5LwARC64ykI8-',
        ]}, {'title': 'TOTW #16', 'content': [
            '1DUlpuNNQrYZnZtIxFkITTezDYkEMZFc5',
            '1T6dUX9AeF94sT97wSrA6ZS5Pnr_HtHaE',
            '1Z51-Dwvf7UbJCBeKrf1J-SEHOMsxhtEr',
            '1ZfArJm_4V65wIr2NeSzW6qlE-5e1RL7m',
            '1jzttT8FpAFTqmy-GLUpiq6YxWA5lAM4P',
            '18gj-KTwVY4QwBCzogQAYmZyfRg-7ydJs',
            '1Z-1jYQPy30r1tdTgSmCKOiblx9xhV_U2',
            '1iGZG3qz0QENVb4dsCyTuFt4pdj7tfi03',
            '1LmfR0Ysvu21w5bzC7TlwK2XIPTJPG3gb',
            '1nl9l-7nPq-kkYz16BReb9Do1U3uY0RO9',
            '1jXxP0K3A7yeLnHtyqZ1anHWPBlh8zkd2',
            '194ZfpmxAjNl1mb31qPvwKHINe8IGeSi1',
            '1LCaoPxa2RTsj3DliZu5sJJ6lZooEmVVZ',
            '1E8YPKbeYWKrwIQvACEKgQFj_pdKf8NcM',
            '18x-6CBNk8LsoMO9x7Qw3pkOpD8MzqVmX',
            '1zXQR7BfC8A5cbW85uCNG5Kzy4OsxDfZI',
            '1aZIF7hIUOh5ypcExtE5O_w5lfy_Ql-k-',
            '1UpVzqWNzKg_0TL8QbPsjOOGkDN_pQA5y',
            '1oxYYPLcvE6lSltQ_wJ4XsvMdDajbt_9o',
            '1tGj1KIgvi3OhShnNojG6E-Tz-BVQClSo',
            '15r4SnykjxatiO6b6VS_qZ_h2cZXr2weI',
        ]}, {'title': 'TOTW #17', 'content': [
            '1PILpUBeCbJCOQHG28h7ZFhs7pDwxHJ01',
            '17pAX8FILNUcU2IzDJ_xe36Q-Yhc-_ydz',
            '12472xyXhBuG_0xXwfGW6aQat9vCEw9Iz',
            '1R7lLREi076Ou0oW2Jd0YrDvr4cdnfDBc',
            '1GcmTgvoYYcICys5WCxSqrZWBSK676z23',
            '1QQToRWaPzm-JxRJYqgeOoUrs3ezyabgl',
            '1YaENboqofs0SGYkyTp9vpcVANbti-t0_',
        ]}, {'title': 'TOTW #18', 'content': [
            '1wwbZ3e_DrHvjTuUNMEn7_MvTk4tFc2cz',
            '1EQnD1VOcNPiraj9XvZw3fCGuIzsDPqJm',
            '1bivBF6d7yRfCHtaWDr0JP8yhptzM_p2s',
            '1wHgkslfNBicsB__EEo4u2NVkUv86rsUE',
            '1kwdsdfwsjygEiDmLrrARFzRXN4DXiQvp',
            '1RQsrtNMI-bveNK1KBBQbI0reIZMRVX1T',
            '1u1MjWUCy0ART_CaDWdiAH4puZROBSdH-',
            '1O3lmRmtO6SPgbS3AOzmG3ldbh5tHb7eO',
            '1WqURw8irZt80_ruZi_3B9je0RWGEXg7r',
            '12aqe3_At0uowZ8VimjCs7641oj-4wmOD',
            '1nYhoY2fwCSJAr4vHFT8T_J52dz7k0pE1',
            '1F8HudXJuzOBbQP250qK5CB7GdEwhczi5',
            '1emtBhdWoZFzs-bzxYQHqUqRyA2Vf1ihv',
            '1wMKowPa_3UG9cbDhHlkck1awrNDNQTA2',
            '1izLFovhBAW3yLzt04urZSQM2lrJgZ3uH',
            '1RUPFZ7yQffAEjkEQRFNxl1P6cjVU1qhm',
            '1_YR8WteKvREol9eSTsL9Ml8bGYWHKnHI',
            '1fWPJHrGjWDoFCQPh4XXBafulJqS1lxNa',
            '1Dv5tqzntvZrycZ26pAXIGZjJx8M-___y',
            '1Jz3dDV1HJX-xCLNNu_rt01a5JkA3HVBn',
            '1E9_0UUI4Kwn76oNHw12AJRbiSO8KMCk4',
            '1e6WMFXQmMVvMbQThbQ8FP77A8WAowLv-',
            '1zW5LHWo18k2oICV30wxyhS6ks1VnqemV',
        ]}, {'title': 'TOTW #19', 'content': [
            '11CMGjyVLFCqQPhnIxdVjQTJ0FK3FF1t9',
            '1gvBSZJY5N8Dkf20CA3UAVasyGa1j0_vW',
            '19jXb9qaTQlXfldHK4ukvf8YaTT77jc1q',
            '1cdbluJ8AppGJyZni3qOAkvQ5R7d6flYc',
            '1a07HjM965gqvs7Ttuf_xLHPseLMxYgUu',
            '1Kgzn6yYv7h00n9XbXwiwmPt5mq5bPGpZ',
            '1-NGcYv7M33s4QUFRlxPCYb1-EPe32lqJ',
            '1F7YwYcwtiKMBpE7ADIOrTCNDIfT33zXx',
            '19Ffy4ssJfPWaLuo66fb-CYd_TqAbKrk3',
            '1AzmCFOuhra2J2YYYVLdxma2zhqGAVJoB',
            '1j9NugZVJbjhCXGnuVB96NfrxR6xWOKwO',
            '1zwShOlKNXjv_orf9F5lyA3ymHhgwe9px',
            '1eptfanAUdkxPv7IqM9Ia0iB_HwoNt1zi',
        ]}, {'title': 'TOTW #20', 'content': [
            '1rhgpa3XQUtA8TovRypJB4PhYkXEb3K8F',
            '1kaT3pmK6RxPL1Wnman_6Er0SLzvGdssj',
            '1wIEIPbU1Amu-8LBQ6kXQ9fsN9XEKje5z',
            '1ykvaxAHaLlQwU3CGgr49HAd6itP9pIZ2',
            '1ExuRVujIldD6BtSvVxP418fBstZJrhpL',
            '1Yi0PCgJIoyeiP9XFHYH9AYAVhMJm3Qm5',
            '1DuiRt4nCYbcKB5n492p6gPNzYpp9L3ZC',
            '1tKs51KVYTWVDlv5-TKHciFAdhcG_rk43',
            '1EBov4e1ZLkhFryE1-4jj86wlHOY7sy-F',
            '1MPYD4jCG5WQBvxonpMutqQmYtOP2uOWl',
            '1LY6tOF-j9Xwu--UizgeHnX81T4fVwTLP',
            '15KkY3O_VCFFuxk4oOJObTTJQhj2R--VF',
            '1DyRJWe3oQkK4UkJ9SSLwCXtpA4CQiYdC',
        ]}, {'title': 'TOTW #21', 'content': [
            '1H3tcrnpn8H8sCc1rmQLnjUxV5Ovtj7gg',
            '1kp2iBwBJ4x0rtN2Q-EzxWV_MKeP4jjBF',
            '13eNoLHUBYjjbK9H_vLJK7V_W3UXu7ohw',
            '1ZbN9orrBE9roV9jBONpxu0Mx5pQiUlwc',
            '1bBb2p_L0_A_5uG1PMXbuuQNYzXKtZ9Xo',
            '1pq5j2XELc8Pgl3Qy-XP5lF8CeHyLBns3',
            '19UH_4w70vsDUCIeQlprRoqd19jKE8YiN',
            '1NslNnO27D7CvjNehOCTan1_K9_VuOo-F',
            '1zIE15EQD-2QJVRdZkoi_ndPjykuEJaQq',
        ]},
    ],
    'Misc': [
        {'title': 'Blank', 'id': '1TNliEBLg0rNdgu1IMyKW5qSdXlhQ2qH7'},
    ]
};
var generated_google_drive_urls = [];

// Contents
writen_google_drive_ids.Misc.forEach(item => {
    generated_google_drive_urls.push({
        'title': item.title,
        'url': 'DRIVE://' + item.id
    })
});
writen_google_drive_ids.Chapters.forEach(chapter => {
    for (let pageNum = 0; pageNum < chapter.content.length; pageNum++) {
        if (pageNum == 0) {
            generated_google_drive_urls.push({
                'title': (chapter.title + ' - Cover'),
                'url': 'DRIVE://' + chapter.content[pageNum]
            })
        } else {
            generated_google_drive_urls.push({
                'title': (chapter.title + ' - Pg.' + pageNum),
                'url': 'DRIVE://' + chapter.content[pageNum]
            })
        };
    };
});

// Exports
export { generated_google_drive_urls };