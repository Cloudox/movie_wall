import os
import xml.dom.minidom

def read_file_as_str(file_path):
    # 判断路径文件存在
    if not os.path.isfile(file_path):
        raise TypeError(file_path + " does not exist")

    all_the_text = open(file_path, encoding='utf-8').read()
    # print(all_the_text)
    return all_the_text

def create_xml():
    #在内存中创建一个空的文档
    doc = xml.dom.minidom.Document() 
    #创建一个根节点Managers对象
    root = doc.createElement('movie') 
    #设置根节点的属性
    # root.setAttribute('company', 'xx科技') 
    # root.setAttribute('address', '科技软件园') 
    #将根节点添加到文档对象中
    doc.appendChild(root) 
    return doc, root

all_the_text = read_file_as_str("E:\\Github\\movie_wall\\static\\Live\\Live.nfo")

node_titles = ["title", "outline", "plot", "runtime", "poster", "thumb", "name", "num", "release", "cover", "website"]

doc, root = create_xml()

for node_title in node_titles:
    begin = all_the_text.find('<' + node_title + '>')+len(node_title)+2
    end = all_the_text.find('</' + node_title + '>')
    node_content = all_the_text[begin: end]
    print(node_content)
    new_node = doc.createElement(node_title)
    new_node.appendChild(doc.createTextNode(node_content))
    root.appendChild(new_node)

#开始写xml文档
xml_file = open('E:\\Github\\movie_wall\\static\\Live\\Live_xml.xml', 'w')
doc.writexml(xml_file, indent='\t', addindent='\t', newl='\n', encoding="utf-8")




# python E:\Github\movie_wall\static\exchange.py