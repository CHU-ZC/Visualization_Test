/**
 * 钢铁与雪：苏德战争历史可视化项目
 * 核心逻辑控制脚本 (无开场视频版，集成全局总结面板)
 */
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================================
       模块 1：纯粹的淡出入场逻辑及音效控制
    =================================================================== */
    const entryScreen = document.getElementById('entry-screen');
    const startBtn = document.getElementById('start-btn');

    // 音频控制
    const themeMusic = document.getElementById('theme-music');
    const bgm = document.getElementById('bgm');
    const sfxBoom = document.getElementById('sfx-boom');
    const btnMusic = document.getElementById('toggle-music');
    const btnSfx = document.getElementById('toggle-sfx');

    let isMusicPlaying = true;
    let isSfxEnabled = true;
    let isTransitioning = false;

    // 初始化配置
    if (themeMusic) themeMusic.volume = 0.7;
    if (bgm) bgm.volume = 0.24;
    if (sfxBoom) sfxBoom.volume = 0.3;

    // 优雅的淡出动画，正式进入历史档案
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (themeMusic) themeMusic.play().catch(e => console.warn("主旋律加载失败:", e));
            if (bgm) bgm.play().catch(e => console.warn("风雪底噪加载失败:", e));

            gsap.to(entryScreen, {
                opacity: 0,
                scale: 1.1,
                duration: 3.5,
                ease: "power2.inOut",
                onComplete: () => {
                    entryScreen.style.display = 'none';
                }
            });
        });
    }

    if (btnMusic) {
        btnMusic.addEventListener('click', () => {
            isMusicPlaying = !isMusicPlaying;
            if (isMusicPlaying) {
                if (themeMusic) themeMusic.play().catch(() => { });
                if (bgm) bgm.play().catch(() => { });
                btnMusic.style.opacity = '1';
            } else {
                if (themeMusic) themeMusic.pause();
                if (bgm) bgm.pause();
                btnMusic.style.opacity = '0.3';
            }
        });
    }

    if (btnSfx) {
        btnSfx.addEventListener('click', () => {
            isSfxEnabled = !isSfxEnabled;
            btnSfx.style.opacity = isSfxEnabled ? '1' : '0.3';
            if (!isSfxEnabled && sfxBoom) sfxBoom.pause();
        });
    }

    /* ===================================================================
       模块 2：UI 面板（全局总结弹窗、右侧手风琴与图表渲染）
    =================================================================== */
    // 2.1 全局总结弹窗逻辑
    const summaryModal = document.getElementById('summary-modal');
    const btnSummary = document.getElementById('btn-summary');
    const btnCloseSummary = document.getElementById('close-summary-modal');

    if (btnSummary) {
        btnSummary.addEventListener('click', () => {
            summaryModal.style.display = 'block';
            // 从中心点缩放弹出的高级质感动效
            gsap.fromTo(summaryModal,
                { opacity: 0, scale: 0.8, yPercent: -50, xPercent: -50, rotationX: 10 },
                { opacity: 1, scale: 1, yPercent: -50, xPercent: -50, rotationX: 0, duration: 0.5, ease: "back.out(1.2)" }
            );
            if (sfxBoom) sfxBoom.pause(); // 弹出总结时停止可能存在的爆炸声
        });
    }

    if (btnCloseSummary) {
        btnCloseSummary.addEventListener('click', () => {
            gsap.to(summaryModal, {
                opacity: 0, scale: 0.9, duration: 0.3,
                onComplete: () => summaryModal.style.display = 'none'
            });
        });
    }

    // 2.2 右侧情报图表渲染
    const domTroops = document.getElementById('chart-troops');
    const domCasualties = document.getElementById('chart-casualties');
    let troopsChart, casualtiesChart;

    if (domTroops) {
        troopsChart = echarts.init(domTroops);
        troopsChart.setOption({
            tooltip: { trigger: 'axis', backgroundColor: 'rgba(230, 218, 195, 0.9)', borderColor: '#544431' },
            grid: { left: '15%', right: '15%', top: '10%', bottom: '15%' },
            xAxis: { type: 'value', axisLabel: { color: '#333' }, splitLine: { show: false } },
            yAxis: { type: 'category', data: ['轴心国', '苏军'], axisLabel: { color: '#1a1a1a', fontWeight: 'bold' } },
            series: [{
                type: 'bar', barWidth: 20,
                data: [
                    { value: 1250, itemStyle: { color: '#4a4a4a' } },
                    { value: 3440, itemStyle: { color: '#cc0000' } }
                ],
                label: { show: true, position: 'right', formatter: '{c} 万', color: '#1a1a1a', fontWeight: 'bold' }
            }]
        });
    }

    if (domCasualties) {
        casualtiesChart = echarts.init(domCasualties);
        casualtiesChart.setOption({
            tooltip: { trigger: 'item', backgroundColor: 'rgba(230, 218, 195, 0.9)', borderColor: '#544431' },
            legend: { bottom: '0%', left: 'center', itemWidth: 10, itemHeight: 10, textStyle: { fontSize: 9, color: '#1a1a1a', fontWeight: 'bold' } },
            series: [{
                name: '伤亡分类', type: 'pie', radius: ['40%', '70%'], center: ['50%', '40%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 3, borderColor: '#d8cbb8', borderWidth: 2 },
                label: { show: false },
                data: [
                    { value: 0.16, name: '轴心国阵亡(500万)', itemStyle: { color: '#4a4a4a' } },
                    { value: 0.28, name: '苏军阵亡(870万)', itemStyle: { color: '#cc0000' } },
                    { value: 0.56, name: '苏联平民遇难(1700万)', itemStyle: { color: '#8c1c13' } }
                ]
            }]
        });
    }

    // 2.3 手风琴点击及图表宽高自适应逻辑
    const panelHeader = document.querySelector('.global-panel-header');
    const panelContent = document.querySelector('.global-panel-content');
    if (panelHeader) {
        panelHeader.addEventListener('click', () => {
            panelContent.style.display = panelContent.style.display === 'block' ? 'none' : 'block';
        });
    }

    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                setTimeout(() => {
                    if (troopsChart) troopsChart.resize();
                    if (casualtiesChart) casualtiesChart.resize();
                }, 200);
            }
        });
    });


    /* ===================================================================
       模块 3：ECharts 地图核心引擎与地理数据处理 (严格保留所有原生参数)
    =================================================================== */
    const chart = echarts.init(document.getElementById('map-container'));
    const geoJsonUrl = 'https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json';

    fetch(geoJsonUrl)
        .then(response => response.json())
        .then(geoJsonData => {
            echarts.registerMap('world_map', geoJsonData);

            const projectCoord = (point) => {
                let lng = point[0], lat = point[1];
                if (lat > 85.051128) lat = 85.051128;
                if (lat < -85.051128) lat = -85.051128;
                let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
                return [lng, -y];
            };

            const initialCenterLngLat = [35.0, 52.0];
            const calculateProjectedCenter = (dataItem) => {
                let baseCenter = dataItem.focal_points?.length > 0 ? dataItem.focal_points[0].coord : initialCenterLngLat;
                const offset = dataItem.camera_offset || [2, 2];
                return projectCoord([baseCenter[0] + offset[0], baseCenter[1] + offset[1]]);
            };

            const getRoutesData = (dataItem) => dataItem.routes.map(r => ({
                coords: r.coords, lineStyle: { color: r.type === 'axis' ? '#1a1a1a' : '#a52a2a' }, name: r.name
            }));
            const getOriginsData = (dataItem) => dataItem.routes.map(r => ({
                name: r.name, value: r.coords[0].concat([1]),
                itemStyle: { color: r.type === 'axis' ? '#4a4a4a' : '#8c1c13' },
                label: { position: r.label_offset || [15, 15] }
            }));
            const getPointsData = (dataItem) => dataItem.focal_points.map(p => ({
                name: p.name, value: p.coord.concat([1]), itemStyle: { color: p.type === 'victory' || p.type === 'liberation' ? '#f7dd5b' : '#cc0000' }, detailData: p.detail, wikipediaUrl: p.wikipedia_url || ''
            }));

            const firstData = warData[0];
            const baseOption = {
                timeline: {
                    axisType: 'category', data: warData.map(i => i.time), autoPlay: false, playInterval: 4000,
                    left: 'center', width: '60%', bottom: '4%', symbolSize: 14,
                    label: { color: '#4a3f35', fontSize: 14, fontFamily: 'serif' },
                    itemStyle: { color: '#8b7d6b', borderColor: '#d8cbb8' },
                    controlStyle: { color: '#4a3f35', borderColor: '#4a3f35' },
                    checkpointStyle: { color: '#8c1c13', borderColor: '#d8cbb8', borderWidth: 2 },
                    lineStyle: { color: '#8b7d6b', width: 2 }
                },
                animationDurationUpdate: 2500,
                animationEasingUpdate: 'cubicInOut',
                geo: {
                    map: 'world_map', roam: 'move', top: 0, bottom: 0, left: 0, right: 0,
                    center: calculateProjectedCenter(firstData), zoom: 10,
                    projection: {
                        project: projectCoord,
                        unproject: function (point) {
                            let lng = point[0], y = -point[1];
                            return [lng, (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2) * (180 / Math.PI)];
                        }
                    },
                    label: { show: true, color: 'rgba(90, 70, 50, 0.4)', fontSize: 24, fontFamily: 'serif', fontWeight: 'bold' },
                    itemStyle: { areaColor: '#ffffff', borderColor: '#544431', borderWidth: 1.5 },
                    emphasis: { label: { show: false }, itemStyle: { areaColor: '#fce6b8' } }
                },
                series: [
                    {
                        id: 'base-cities', type: 'scatter', coordinateSystem: 'geo', zlevel: 1, symbolSize: 15,
                        itemStyle: { color: 'rgba(90, 70, 50, 0.6)' },
                        label: { show: true, position: 'right', formatter: '{b}', color: 'rgba(90, 70, 50, 0.8)', fontSize: 14, fontFamily: 'serif', textBorderColor: '#d8cbb8', textBorderWidth: 1 },
                        data: [{ name: '伦敦', value: [-0.12, 51.50, 1] }, { name: '巴黎', value: [2.35, 48.85, 1] }, { name: '罗马', value: [12.49, 41.90, 1] }, { name: '斯德哥尔摩', value: [18.06, 59.32, 1] }, { name: '赫尔辛基', value: [24.93, 60.16, 1] }]
                    },
                    { id: 'origins', type: 'scatter', coordinateSystem: 'geo', zlevel: 2, symbolSize: 8, label: { show: true, position: [15, 15], formatter: '{b}', color: '#4a3f35', fontSize: 26, fontFamily: 'serif', fontWeight: 'bold', backgroundColor: 'rgba(216, 203, 184, 0.8)', padding: [2, 5], borderRadius: 3 }, data: getOriginsData(firstData) },
                    { id: 'routes', type: 'lines', coordinateSystem: 'geo', zlevel: 3, effect: { show: true, period: 6, trailLength: 0.2, symbol: 'arrow', symbolSize: 25 }, lineStyle: { width: 5.5, opacity: 0.9, curveness: 0.25 }, data: getRoutesData(firstData) },
                    { id: 'battles', type: 'effectScatter', coordinateSystem: 'geo', zlevel: 4, rippleEffect: { brushType: 'fill', scale: 4 }, symbolSize: 14, labelLayout: { hideOverlap: false, moveOverlap: 'shiftY' }, label: { show: true, position: 'right', distance: 15, formatter: '{b}', color: '#1a1a1a', fontSize: 23, fontWeight: 'bold', fontFamily: 'serif', textBorderColor: '#d8cbb8', textBorderWidth: 2 }, data: getPointsData(firstData) }
                ]
            };

            chart.setOption({ baseOption: baseOption, options: warData.map(() => ({})) });

            /* ===================================================================
               模块 4：UI 联动与影视级转场动画 (Timeline Control)
            =================================================================== */
            const infoCard = document.getElementById('info-card');
            const battleModal = document.getElementById('battle-modal');
            const cinematicOverlay = document.getElementById('cinematic-overlay');
            const stageTextOverlay = document.getElementById('stage-text-overlay');

            stageTextOverlay.innerText = firstData.stageName;
            gsap.to(stageTextOverlay, { opacity: 1, duration: 1, delay: 1 });

            const syncInfoCard = (data) => {
                gsap.to(infoCard, {
                    opacity: 0, y: 15, duration: 0.3,
                    onComplete: () => {
                        document.getElementById('card-time').innerText = data.time;
                        document.getElementById('card-title').innerText = data.event_title;
                        document.getElementById('card-desc').innerText = data.description;
                        gsap.to(infoCard, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" });
                    }
                });
            };
            syncInfoCard(firstData);

            const closeBattleModal = () => {
                if (battleModal.style.display !== 'none') {
                    if (sfxBoom) sfxBoom.pause();
                    gsap.to(battleModal, { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => battleModal.style.display = 'none' });
                }
            };

            chart.on('timelinechanged', function (params) {
                if (isTransitioning) return;
                isTransitioning = true;

                const dataItem = warData[params.currentIndex];
                closeBattleModal();
                syncInfoCard(dataItem);

                gsap.to(stageTextOverlay, { opacity: 0, duration: 0.3 });

                gsap.to(cinematicOverlay, {
                    opacity: 0.95, duration: 0.3, ease: "power2.out",
                    onComplete: () => {
                        chart.setOption({
                            geo: { center: calculateProjectedCenter(dataItem) },
                            series: [{ id: 'origins', data: [] }, { id: 'routes', data: [] }, { id: 'battles', data: [] }]
                        });

                        gsap.to(cinematicOverlay, { opacity: 0, duration: 1.2, ease: "power2.inOut" });

                        setTimeout(() => {
                            stageTextOverlay.innerText = dataItem.stageName;
                            gsap.to(stageTextOverlay, { opacity: 1, duration: 0.8, ease: "power2.out" });
                        }, 500);

                        setTimeout(() => {
                            chart.setOption({
                                series: [
                                    { id: 'origins', data: getOriginsData(dataItem) },
                                    { id: 'routes', data: getRoutesData(dataItem) },
                                    { id: 'battles', data: getPointsData(dataItem) }
                                ]
                            });
                        }, 2500);

                        setTimeout(() => { isTransitioning = false; }, 200);
                    }
                });
            });

            /* ===================================================================
               模块 5：图层点击事件与战役档案展示
            =================================================================== */
            chart.on('click', function (params) {
                if (params.seriesId && params.seriesId.includes('battles')) {
                    if (isSfxEnabled) {
                        sfxBoom.currentTime = 0;
                        sfxBoom.play().catch(() => { });
                    }
                    document.getElementById('modal-title').innerText = params.data.name;
                    document.getElementById('modal-content').innerHTML = params.data.detailData || "档案受损，暂无详细记录。";

                    const wikiBtn = document.getElementById('btn-wikipedia');
                    if (wikiBtn) {
                        if (params.data.wikipediaUrl) {
                            wikiBtn.setAttribute('data-url', params.data.wikipediaUrl);
                            wikiBtn.style.display = 'inline-block';
                        } else {
                            wikiBtn.style.display = 'none';
                        }
                    }

                    const pixelCoord = chart.convertToPixel('geo', params.data.value.slice(0, 2));
                    let modalX = pixelCoord[0] + 40;
                    let modalY = pixelCoord[1];
                    if (modalX + 480 > window.innerWidth) modalX = pixelCoord[0] - 480 - 40;

                    battleModal.style.left = `${modalX}px`;
                    battleModal.style.top = `${modalY}px`;
                    battleModal.style.display = 'block';

                    gsap.fromTo(battleModal,
                        { opacity: 0, scale: 0.8, x: -20, yPercent: -50, rotationX: 20 },
                        { opacity: 1, scale: 1, x: 0, yPercent: -50, rotationX: 0, duration: 0.5, ease: "back.out(1.2)" }
                    );
                }
            });

            document.getElementById('close-modal').addEventListener('click', closeBattleModal);

            document.getElementById('btn-wikipedia').addEventListener('click', function () {
                const url = this.getAttribute('data-url');
                if (url) {
                    window.open(url, '_blank');
                }
            });
        })
        .catch(error => console.error("加载地理数据档案失败:", error));
});