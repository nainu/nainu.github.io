---
layout: post
title:  "github ssh-key 여러개 쓰기"
date:   2016-01-14 01:30:00 +0900
categories: github
---

회사에서 저장소를 github enterprise를 사용하는 관계로 github 계정을 업무용/개인용 두 개를 써야 하게 생겼다.
ssh-key를 등록해서 써야 하는데 물론 회사에서는 회사꺼만 쓰면 되고 근데 집에서 쓸 내 컴퓨터가 이젠 따로 없는 관계로..

그래서 검색, 한방에 쓸만한 URL을 찾아냈다

- [Multiple SSH Keys settings for different github account](https://gist.github.com/jexchan/2351996)

개략적인 방식은 아래와 같은 듯. 그냥 이해한 내용을 풀어 놓은거니까 위 글을 꼭 보십시요.

1. 일단 ssh 키를 하나 더 만듦.
2. ssh-add
3. ~/.ssh/config 를 이용해서 github.com 말고 github.com-abc 등 다른 alias를 만든다.
4. 잘 쓴다.(알아서 키를 골라 쓰도록 설정했으니 잘된다)

전회사는 P4 를 썼고 그 전 회사는 gitosis를 가지고 로컬에 git 저장소를 만들어서 썼다.
그때는 두세명이서 충돌나면 대충 머지하고 커밋도 막 올리고 그렇게 썼는데 이번 회사는 그렇지 않다.
작업자가 같은 사무실에 앉아있는 게 아니니 PR도 잘 만들어서 올려야 하고 여튼 어색한 그런 느낌..
그래서 일단은 배우는 족족 메모해 놓고 열심히 따라 치고 있다.

좀 익숙해 져서 잊어먹을 만큼 지식이 늘면 그때 또..
