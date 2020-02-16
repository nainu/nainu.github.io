---
layout: post
title:  "fsevents.npm"
date:   2016-01-14 01:30:00 +0900
categories: nodejs mac
---

UI 관련 코드를 오토-컴파일 하면서 작업하려면 천상 webpack같은 것에 웹서버, 그리고 watcher 같은게 필요하게 마련이다.
이때 node.js, mac 환경에서는 CPU가 막 하늘로 치솟는..물론 이건 top이나 Activity Monitor 켜봐야 알 수 있겠지만
여튼 체감상 컴퓨터가 마구 느려진다. 팬도 막 돈다. 막 뜨거워진다.

원인을 파악하려고 옆사람이 메모리 릭 잡던 시절을 추억하며 node-inspector 등을 깔아서 봤는데 내가 몰라서인지 쓸만한 정보가 보이지 않았다.
그냥 모듈 컴파일 중 뭔가 busy-waiting을 하는 것 같았지만 inspector에선 찾을 수 없었고 그래서 그냥 비슷한 문제를 겪는 사람이 있겠지 하고 증상 위주로 검색을 해서 한방에 딱

- [Very high CPU usage with new watcher #701](https://github.com/webpack/webpack/issues/701)

안에 보면 fsevents 를 깔라고 나오는데 이건 파일 변경을 알려주는 데몬인 것 같다.

 - [What is fseventsd?](https://techblog.willshouse.com/2011/05/05/what-is-fseventsd/)

아래는 한줄요약

    $ npm install request core-util-is rimraf process-nextick-args \
    semver readable-stream npmlog fsevents

이상하게 npm install fsevents 만으로 설치가 잘 안되고 404에러가 막 나면서 결국 저렇게 쭉 써줘야 한다는..
