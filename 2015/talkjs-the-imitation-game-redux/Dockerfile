FROM golang

RUN go get -v golang.org/x/tools/cmd/present github.com/jackyb/enigma

VOLUME /present
WORKDIR /present

EXPOSE 3999
ENTRYPOINT present -http=0.0.0.0:3999
