import kotlin.browser.window

fun main(args: Array<String>) {
    println("Hello JavaScript!")
    window.document.
            getElementById("getMe")!!.
            innerHTML += "<br/>get me out !"
    println("debug point me ！！")
    println("debug show me ！！")
}