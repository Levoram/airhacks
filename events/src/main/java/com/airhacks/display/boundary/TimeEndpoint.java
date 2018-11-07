
package com.airhacks.display.boundary;

import java.io.IOException;
import java.util.Date;
import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author airhacks.com
 */
@Startup
@Singleton
@ServerEndpoint("/time")
public class TimeEndpoint {

    private Session session;

    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
    }

    @OnMessage
    public void onMessage(String message) {
        System.out.println("message = " + message);
    }

    @Schedule(second = "*/2", minute = "*", hour = "*")
    public void periodicPush() {
        if (this.session != null && this.session.isOpen()) {
            try {
                System.out.println("push");
            this.session.getBasicRemote().sendText("hello from cool Java EE " + new Date());
            } catch (IOException ex) {
            }
        } else {
            System.out.println("no session...");
        }
    }


}
